import React, {useState} from 'react'
import axios from 'axios'

function Register() {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/users',data).then(
            res => alert(res.data)
        )
    }

  return (
    <div>
        <form onSubmit={submitHandler} autoComplete='off'>
            <h1>Register</h1>
            <input type='text' onChange={changeHandler} name='name' placeholder='Enter name' /><br />
            <input type='email' onChange={changeHandler} name='email' placeholder='Enter email' /><br />
            <input type='password' onChange={changeHandler} name='password' placeholder='Enter password' /><br />
            <input type='submit' value='Register' />

            
        </form>
    </div>
  )
}

export default Register