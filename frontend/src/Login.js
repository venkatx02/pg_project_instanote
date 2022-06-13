import React, {useState, useContext} from 'react'
import axios from 'axios'
import { store } from './App'
import { Navigate } from "react-router-dom";
import {FaSignInAlt} from 'react-icons/fa'
import { toast } from 'react-toastify';

function Login() {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/users/login',data).then(
            res => setToken(res.data.token)
        )
    }

    if(token){
        return (
            <Navigate to="/dashboard" replace={true} />
          )
        }


  return (
    <div>
        <section className='heading'>
        <h1><FaSignInAlt />Login</h1>
        <p>Login to your account!</p>
        </section>

        <section className='form'>
        <form onSubmit={submitHandler} autoComplete='off'>
            <div className='form-group'>           
            <input className='form-control' type='email' onChange={changeHandler} name='email' placeholder='Enter email' /><br />
            <input className='form-control' type='password' onChange={changeHandler} name='password' placeholder='Enter password' /><br />
            <input className='btn btn-block' type='submit' value='Login' />
            </div>
        </form>
        </section>
    </div>
  )
}

export default Login