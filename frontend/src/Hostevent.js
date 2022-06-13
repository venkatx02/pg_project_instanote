import React, {useContext, useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { store } from './App'
import axios from 'axios'


function Hostevent() {
  const [token, setToken] = useContext(store)
  console.log(token)
    const [data, setData] = useState({
        eventname:'',
        eventdescription:''
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/events',{
          eventname: data.eventname,
          eventdescription: data.eventdescription,
        }).then(
            res => console.log(res.data)
        )
    }
  if(token){
  return (
    <div>
        <form onSubmit={submitHandler} autoComplete='off'>
            <h1>Enter event details</h1>
            <input type='text' name='eventname' onChange={changeHandler} placeholder='Name/Title of the event' /><br />
            <textarea name='eventdescription' onChange={changeHandler} placeholder='Description of the event such as hosted by, target audience, contact details...' /><br />
            <input type='submit' value='Submit' />
            </form>
    </div>
  )}
}


export default Hostevent