import React, {useContext, useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { store } from './App'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'


function Hostevent() {
  const [token, setToken] = useContext(store)
  console.log(token)
  const [data, setData] = useState({
        eventname:'',
        eventtype: '',
        eventorganizer: '',
        eventcollabrators: '',
        eventvenue: '',
        eventdate: '',
        eventcontact: '',
        eventemail: '',
        eventdescription: '',
        eventprice: '',
        eventimage: ''
    })



    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const uploadHandler = (event) => {
      console.log(event.target.files[0])
      setData({...data, eventimage: event.target.files[0]})
    }

    const submitHandler = (e) => {
      e.preventDefault()


      let url = 'http://localhost:5000/api/events'
      console.log('==',data.eventimage,'===',data.eventimage.name)
      const formData = new FormData();
      formData.append('eventimage', data.eventimage, data.eventimage.name)
      formData.append('eventname', data.eventname)
      formData.append('eventtype', data.eventtype)
      formData.append('eventorganizer', data.eventorganizer)
      formData.append('eventcollabrators', data.eventcollabrators)
      formData.append('eventdate', data.eventdate)
      formData.append('eventvenue', data.eventvenue)
      formData.append('eventcontact', data.eventcontact)
      formData.append('eventemail', data.eventemail)
      formData.append('eventdescription', data.eventdescription)
      formData.append('eventprice', data.eventprice)

      const headers = {
        Authorization: `Bearer ${token}`
      }
       axios.post(url, formData, { headers: headers})
        /* e.preventDefault()


        axios.post('http://localhost:5000/api/events', { eventname: data.eventname,
        eventtype: data.eventtype,
        eventorganizer: data.eventorganizer,
        eventcollabrators: data.eventcollabrators,
        eventdate: data.eventdate,
        eventvenue: data.eventvenue,
        eventcontact: data.eventcontact,
        eventemail: data.eventemail,
        eventdescription: data.eventdescription,
        eventprice: data.eventprice, }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(
            res => console.log(res.data),
            toast.success('Posted Successfully')
        ) */
    }

    if(!token){
      return (
          <Navigate to="/login" replace={true} />
        ) 
  }

  if(token){
  return (
    <div>
      <section className='form'>
        <form onSubmit={submitHandler} encType="multipart/form-data" autoComplete='off'>
          <div className='form-group'>
            <h1>Enter event details</h1>
            <input className='form-control' type='text' name='eventname' onChange={changeHandler} placeholder='Name/Title of the event' /><br />
            <input className='form-control' type='text' name='eventtype' onChange={changeHandler} placeholder='Type of the event' /><br />
            <input className='form-control' type='text' name='eventorganizer' onChange={changeHandler} placeholder='Organized by' /><br />
            <input className='form-control' type='text' name='eventcollabrators' onChange={changeHandler} placeholder='Collabrators (if any)' /><br />
            <input className='form-control' type='date' name='eventdate' onChange={changeHandler} placeholder='Date of the event' /><br />
            <input className='form-control' type='text' name='eventvenue' onChange={changeHandler} placeholder='Venue of the event' /><br />
            <input className='form-control' type='text' name='eventcontact' onChange={changeHandler} placeholder='Mobile number for contact' /><br />
            <input className='form-control' type='text' name='eventemail' onChange={changeHandler} placeholder='Email for contact' /><br />
            <textarea className='form-control' name='eventdescription' onChange={changeHandler} placeholder='Description of the event' /><br />
            <input className='form-control' type='number' name='eventprice' onChange={changeHandler} placeholder='Ticket Price' /><br />
            <input className='form-control' type='file' name='eventimage' onChange={uploadHandler} placeholder='Image File' /><br />
            <input className='btn btn-block' type='submit' value='Submit' />
          </div>
            </form>
      </section>
    </div>
  )}
}


export default Hostevent