import React from 'react'
import {useState, useContext} from 'react'
import {store} from './App'

function Navbar() {
    const [token, setToken] = useContext(store)

  return (
    <div>
        {!token &&
        <ul>
            <li>Register</li>
            <li>Login</li>
        </ul>
}
    </div>
  )
}

export default Navbar