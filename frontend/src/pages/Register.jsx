import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const {name, email, password, cpassword} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]

        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    

  return (
    <>
    <section className='title'>
        <h1>
            <FaUser /> Register
        </h1>
        <p>Create an account!</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
            <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
            <input type="password" className="form-control" id='cpassword' name='cpassword' value={cpassword} placeholder='Confirm password' onChange={onChange} />
            </div>
            <div className='form-group'>
            <button type='submit'>Register</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register