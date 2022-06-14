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
            <div className='eventtitle'> {event.eventname} </div>
            <div className='eventdetails'> {event.eventdescription} </div>
          
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