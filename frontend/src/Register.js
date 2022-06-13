import React, {useState} from 'react'
import axios from 'axios'
import { FaUser } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'

function Register() {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name, email, password, password2} = data

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(password==password2){
        axios.post('http://localhost:5000/api/users',{
            name: data.name,
            email: data.email,
            password: data.password
        }).then(
            res => console.log(res.data))
            toast.success('Registeration Successful')
    }else{
        toast.error('Passwords do not match')
    }
    }

  return (
    <div>
        <section className='heading'>
        <h1><FaUser />Register</h1>
        <p>Create an account!</p>
        </section>
        
        <section className='form'>
        <form onSubmit={submitHandler} autoComplete='off'>
            <div className='form-group'>
            <input className='form-control' type='text' onChange={changeHandler} name='name' placeholder='Enter name' /><br />
            <input className='form-control' type='email' onChange={changeHandler} name='email' placeholder='Enter email' /><br />
            <input className='form-control' type='password' onChange={changeHandler} name='password' value={password} placeholder='Enter password' /><br />
            <input className='form-control' type='password' onChange={changeHandler} name='password2' value={password2} placeholder='Confirm password' /><br />
            <input className='btn btn-block' type='submit' value='Register' />
            </div>
        </form>
        </section>
    </div>
  )
}

export default Register