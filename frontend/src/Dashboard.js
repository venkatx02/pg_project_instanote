import React, {useContext, useState, useEffect} from 'react'
import { store } from './App'
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

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
          <table className="eventtable" >
          <th><div className='eventtitle'> {event.eventname} </div></th>
          <tr><div className='eventhoster'> {event.name} </div></tr>
          <tr><div className='eventdetails'> {event.eventtype} </div></tr>
          <tr><div className='eventdetails'> {event.eventorganizer} </div></tr>
          <tr><div className='eventdetails'> {event.eventcollabrators} </div></tr>
          <tr><div className='eventdetails'> {event.eventdate} </div></tr>
          <tr><div className='eventdetails'> {event.eventvenue} </div></tr>
          <tr><div className='eventdetails'> {event.eventcontact} </div></tr>
          <tr><div className='eventdetails'> {event.eventemail} </div></tr>
          <tr><div className='eventdetails'> {event.eventdescription} </div></tr>
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