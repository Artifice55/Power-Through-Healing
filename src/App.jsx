import React, { useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage"
import AboutMePage from "./components/AboutMePage" 
import Services from "./components/Services" 
import ContactInformation from "./components/ConactInformation";

import './App.css';
import LoginPage from './components/LoginPage';

// TODO:  Restructure <App> with two major changes:
//          1.  Create new <LoginPage> component that now holds 
//              all login page JSX previously written in <App>.
//          2.  Call ALL child components (<LoginPage> and everything else)
//              from this parent component so that we can effectively use
//              `useState` and `useEffect` (they cannot be created or used
//              from `index.js`).

function App() {
  
  const [serviceData, setServiceData] = useState([]);

  const baseURL= "http://localhost:9000/services"

  useEffect(() => {
      fetch(baseURL)
      .then(res => res.json())
      .then(data => setServiceData(data))
    }, []);
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={ <LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/services" element={<Services serviceData={serviceData}/>} />
        <Route path="/contact" element={<ContactInformation />} />
      </Routes>
       </div>
    )
}








export default App;