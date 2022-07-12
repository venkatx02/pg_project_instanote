import React, {useEffect, useState, useContext} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import { store } from './App'

function EventDetail() {
  const [token, setToken] = useContext(store)
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

  if(!token){
    return (
        <Navigate to="/login" replace={true} />
      ) 
}


  return (
    <div> <li>
          <table className='eventdetailtable' border={1}>
          <th className='eventth'><div className='eventtitle'> {event.eventname} </div></th>
          <tr>
          <td className='eventdetailcell'>
          <div className='eventhoster'> hosted by: {event.user} </div>
          <div className='eventdetails'> <label className='eventsh'>Event type: </label>{event.eventtype} </div>
          <div className='eventdetails'> <label className='eventsh'>Organized by: </label>{event.eventorganizer} </div>
          <div className='eventdetails'> <label className='eventsh'>Collabrators/Sponsors: </label>{event.eventcollabrators} </div>
          <div className='eventdetails'> <label className='eventsh'>Date: </label>{event.eventdate} </div>
          <div className='eventdetails'> <label className='eventsh'>Venue: </label>{event.eventvenue} </div>
          <div className='eventdetails'> <label className='eventsh'>Contact no.: </label>{event.eventcontact} </div>
          <div className='eventdetails'> <label className='eventsh'>Contact E-mail: </label>{event.eventemail} </div>
          <div className='eventdetails'> <label className='eventsh'>Description: </label>{event.eventdescription} </div>
          <div className='eventdetails'> <label className='eventsh'>Ticket Price: </label>{event.eventprice} /-</div>
          </td>
          <td className='eventdetailcell'><img className='photo' src={imglink} /></td>
          </tr>
          <tr><div><button className='bookbutton'onClick={handlePayment}>Book now</button></div></tr>

          </table>
          </li>
    </div>
  )
}

export default EventDetail
