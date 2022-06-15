import React, {useContext, useState, useEffect} from 'react'
import { store } from './App'
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'
import { collapseToast, toast } from 'react-toastify'

function Dashboard() {
    const [token, setToken] = useContext(store)
    const [events, setEvents] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:5000/api/events').then(res => {
        console.log(res)
        setEvents(res.data)
      }).catch(err => {console.log(err)})
    }, [])
    
    if(!token){
        return (
            <Navigate to="/login" replace={true} />
          ) 
    }



    return (
    <>
    <div className='eventelement'>
      <ul>
        {
        events.map(event => (     
          <section className=''>
          <li key={event._id}>
          <table className='eventtable' border={1}>
          <th className='eventth'><div className='eventtitle'> {event.eventname} </div></th>
          <tr><div className='eventhoster'> hosted by: {event._id} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Event type: </label>{event.eventtype} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Organized by: </label>{event.eventorganizer} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Collabrators/Sponsors: </label>{event.eventcollabrators} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Date: </label>{event.eventdate} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Venue: </label>{event.eventvenue} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Contact no.: </label>{event.eventcontact} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Contact E-mail: </label>{event.eventemail} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Description: </label>{event.eventdescription} </div></tr>
          </table>
          </li><br />
          </section>             
        ))
        }
      </ul>
    </div>
    <div>
        
    </div>
    </>
  )
  }

export default Dashboard