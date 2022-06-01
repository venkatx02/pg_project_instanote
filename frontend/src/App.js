import React from "react";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Homepage from "./Homepage";
import Nav from "./Nav";

export const store = createContext();

const App = () => {

  const [token, setToken] = useState();

  return (
    <>
    <store.Provider value={[token, setToken]}>
    <Nav />
    <div className="container">
    <Routes>
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/register' element={<Register />} />
    <Route exact path='/homepage' element={<Homepage />} />
    </Routes>
    </div>
    </store.Provider>
    </>

  )
}

export default App;