import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import './App.css';

import Home from './components/Home';
import About from './components/About';
import Adidas from './components/Adidas';
import NiKe from './components/Nike';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Shop from './components/Shop';
// import Navbarmenu from './components/menu/Navbarmenu';
import Navbar1 from './components/menu/Navbar1';
import Unisex from './components/Unisex';
import Accessory from './components/Accessory';
import Login from './components/Login';
import User from './components/User';
import Cart from './components/Cart';
import {  ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import Admin from './components/Admin';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="container">
      <BrowserRouter basename="/">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000} />


        {/* Add Menu Component */}
        <Navbar1 />
        
        <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Adidas" element={<Adidas/>}/>
          <Route path="/Nike" element={<NiKe/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Detail/:id" element={<Detail/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Unisex" element={<Unisex/>}/>
          <Route path="/Accessory" element={<Accessory/>}/>
          <Route path="/Cart" element={<Cart/>}/>


          
            <Route path="/User" element={<User/>} />
          
            <Route
              path="/Login"
              element={<Login/>}
            />
          <Route path="/Admin" element={<Admin/>}/>
  
          





          
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
