import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
