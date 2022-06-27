import React, {useContext, useState, useEffect} from 'react'
import { store } from './App'
import {Link, Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { collapseToast, toast } from 'react-toastify'

function Dashboard() {
  let navigate = useNavigate();
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
          <tr><div className='eventhoster'> hosted by: {event.user} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Event type: </label>{event.eventtype} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Date: </label>{event.eventdate} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Organized by: </label>{event.eventorganizer} </div></tr>
          <tr><div className='eventdetails'> <label className='eventsh'>Description: </label>{event.eventdescription} </div></tr>
          <tr><div><button className='viewbutton' onClick={()=>{navigate(`/dashboard/${event._id}`)}}>View</button></div></tr>
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