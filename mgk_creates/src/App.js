import React from 'react'
import { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';


function App ()  {
  const [selectedUser, setSelectedUser] = useState('');

  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout setSelectedUser={setSelectedUser}/>}>
         <Route index element={<Home selectedUser={selectedUser}/>}/>
         <Route  path='contactUs' element={<ContactUs/>}/>
         <Route  path='aboutUs' element={<AboutUs/>}/>
         
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App