import React, {useState, useContext, createContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Hostevent from './Hostevent';
import Home from './Home';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const store = createContext();


function App() {
  const [token,setToken] = useState(null);
  return (
    <div className='container'>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      < Navbar />
      <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/register' element={< Register />}></Route>
      <Route path='/login' element={< Login />}></Route>
      <Route path='/dashboard' element={< Dashboard />}></Route>
      <Route exact path='/dashboard/hostevent' element={< Hostevent />}></Route>
      </Routes>
      </BrowserRouter>
      </store.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
