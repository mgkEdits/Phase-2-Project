import React from 'react'
import { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import User from './components/User';


function App ()  {
  const [userRepo, setUserRepo] = useState([])
  const [displayUserInfo, setDisplayUserInfo] = useState(false);
  const [loading, setLoading] = useState(false)

  function findUserRepo(selectedUser) {
    setLoading(true)
    setTimeout(() => {
      fetch(`https://api.github.com/users/${selectedUser}/repos`)
        .then((response) => response.json())
        .then((data) => {
          console.log("received Search")
          setUserRepo(data);
        });
    }, 4000); // Delay of 6 seconds slow Api
    console.log("completed Search")
    setLoading(false); // Set loading to false when data is fetched
  }

  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout loading={loading} setDisplayUserInfo={setDisplayUserInfo} onClickUser={findUserRepo}/>}>
       {displayUserInfo ? (
        <Route  path='' element={<User loading={loading} userRepo={userRepo}/>}/>
      ) : (
        <Route index element={<Home/>}/>
      )}
         <Route  path='contactUs' element={<ContactUs/>}/>
         <Route  path='aboutUs' element={<AboutUs/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App