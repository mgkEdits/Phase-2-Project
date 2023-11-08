import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';


function App ()  {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('https://api.football-data.org/v4/competitions')
    .then((response) => response.json())
    .then((data) => { setDatas(data); })

    console.log(datas)
    }, []);
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route  path='contactUs' element={<ContactUs/>}/>
         <Route  path='aboutUs' element={<AboutUs/>}/>
         
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App