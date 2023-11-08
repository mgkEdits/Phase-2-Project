import React from 'react'
import { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import User from './components/User';


function App ()  {
  const [selectedUser, setSelectedUser] = useState('');
  const [userRepo, setUserRepo] = useState([])
  const [displayUserInfo, setDisplayUserInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  function findUserRepo() {
    setLoading(true); 
    setTimeout(() => {
      fetch(`https://api.github.com/search/users?q=octocat`)
        .then((response) => response.json())
        .then((data) => {
          setUserRepo(data);
          setLoading(false); // Set loading to false when data is fetched
        });
    }, 6000); // Delay of 6 seconds slow Api
  }

 function buffer(){
  loading ? (
    <div className='scn-card'>Loading data...</div> // Display a loading indicator while data is loading
    ) : (
      <Route  path='' element={<User userRepo={userRepo}/>}/>
      )
 }

  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout setDisplayUserInfo={setDisplayUserInfo} setSelectedUser={setSelectedUser}/>}>
       {displayUserInfo ? (
        {buffer}
      ) : (
        <Route index element={<Home selectedUser={selectedUser}/>}/>
      )}
         <Route  path='contactUs' element={<ContactUs/>}/>
         <Route  path='aboutUs' element={<AboutUs/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App