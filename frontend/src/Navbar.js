import React from 'react'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {store} from './App'
import {FaSignInAlt,FaUser} from 'react-icons/fa'

function Navbar() {
    const [token, setToken] = useContext(store)

  return (
    <header className='navbar'>
      <div className='logo'><Link to='/'>InstaNote</Link></div>
        {!token &&
        <ul>
            <li><Link to='/register'><FaUser />Register</Link></li>
            <li><Link to='/login'><FaSignInAlt />Login</Link></li>
        </ul>
}
        {token &&
        <ul>
          <li><Link to='/dashboard'>Search for Events</Link></li>
          <li><Link to='/dashboard/hostevent'>Host your own Event</Link></li>
          <li><button onClick={ () => setToken(null) }>Logout</button></li>
        </ul>

        }
    </header>
  )
}

export default Navbar