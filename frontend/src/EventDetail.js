import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function EventDetail() {
  const {id} = useParams();
  const [event, setEvent] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/events/${id}`).then(
      response => response.json()
    ).then(json=>setEvent(json))
  },[])

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
          </table>
          </li>
    </div>
  )
}

export default EventDetail
