import React, {useContext, useState, useEffect} from 'react'
import { store } from './App'
import {Navigate} from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
    const [token, setToken] = useContext(store)
    useEffect(()=> {
        axios.get('http://localhost:5000/api/events', {})
    })
    if(!token){
        return (
            <Navigate to="/login" replace={true} />
          ) 
    }
  return (
    <div>Dashboard
        <button onClick={() => setToken(null)}>Logout</button>
    </div>
  )
}

export default Dashboard