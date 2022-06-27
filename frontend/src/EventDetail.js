import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

function EventDetail() {
  const {id} = useParams();
  const [event, setEvent] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/events/${id}`).then(
      response => response.json()
    ).then(json=>setEvent(json))
  },[])

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_PyWMbcRbX3BL7x",
			amount: data.amount,
			currency: data.currency,
			name: event.eventname,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/api/order/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
          toast.success('Payment Successful! Kindly check your email.')
          
				} catch (error) {
					console.log(error);
          toast.error('Something went wrong!!!')
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const handlePayment = async () => {
    try {
      const orderURL = 'http://localhost:5000/api/order/orders'
      const {data} = await axios.post(orderURL, { amount: event.eventprice})
      console.log(data)
      initPayment(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  const imglink = `http://localhost:5000/api/events/${event.eventimage}`


  return (
    <div> <li>
          <table className='eventdetailtable' border={1}>
          <th className='eventth'><div className='eventtitle'> {event.eventname} </div></th>
          <tr><div className='eventhoster'> hosted by: {event.user} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Event type: </label>{event.eventtype} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Organized by: </label>{event.eventorganizer} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Collabrators/Sponsors: </label>{event.eventcollabrators} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Date: </label>{event.eventdate} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Venue: </label>{event.eventvenue} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Contact no.: </label>{event.eventcontact} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Contact E-mail: </label>{event.eventemail} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Description: </label>{event.eventdescription} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Ticket Price: </label>{event.eventprice} </div></tr>
          <tr><div><button className='bookbutton'onClick={handlePayment}>Book now</button></div></tr>

          </table>
          </li>
    </div>
  )
}

export default EventDetail
