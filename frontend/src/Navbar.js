import React from 'react'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {store} from './App'
import {FaSignInAlt,FaUser} from 'react-icons/fa'
import { Navigate } from "react-router-dom";
import Home from './Home'

function Navbar() {
    const [token, setToken] = useContext(store)

    const logoutHandler = () => {
        setToken(null)
    }

    

  return (
    <header className='navbar'>
      <div className='logo'><ul><li><Link to='/'>InstaNote</Link></li></ul></div>
        {!token &&
        <ul>
            <li className='navbutton'><Link to='/register'><FaUser />Register</Link></li>
            <li className='navbutton'><Link to='/login'><FaSignInAlt />Login</Link></li>
        </ul>
}
        {token &&
        <ul>
          <li className='navbutton'><Link to='/dashboard'>Search for Events</Link></li>
          <li className='navbutton'><Link to='/dashboard/hostevent'>Host your own Event</Link></li>
          <li><button className='logout' onClick={logoutHandler}>Logout</button></li>
        </ul>

        }
    </header>
  )
}

export default Navbar