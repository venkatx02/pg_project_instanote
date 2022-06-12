import React, {useState, useContext} from 'react'
import axios from 'axios'
import { store } from './App'
import { Navigate } from "react-router-dom";

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
        <form onSubmit={submitHandler} autoComplete='off'>
            <h1>Login</h1>
            <input type='email' onChange={changeHandler} name='email' placeholder='Enter email' /><br />
            <input type='password' onChange={changeHandler} name='password' placeholder='Enter password' /><br />
            <input type='submit' value='Login' />

            
        </form>
    </div>
  )
}

export default Login