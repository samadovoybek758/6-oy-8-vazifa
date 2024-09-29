import React from 'react';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  )
}

export default App