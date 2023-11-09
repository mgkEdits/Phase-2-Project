import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './../styles/layout.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import SearchBar from './SearchBar'

function Layout ({setDisplayUserInfo, onClickUser,loading}) {
  const [users, setUsers] = useState([]);
  // const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('mounting, fetching, useEffect')
    setIsLoading(true); 
    setTimeout(() => {
      fetch(`https://api.github.com/search/users?q=octocat`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.items);
          setIsLoading(false); // Set loading to false when data is fetched
        });
    }, 6000); // Delay of 6 seconds slow Api
    }, []);

    return (
      <div className='section-main'>
        <NavBar/>
        <SearchBar />
        <div className='section-body'>
           { isLoading ? (
              <div className='scn-sideBar'>Loading...</div> // Display a loading indicator while data is loading
            ) : (
              <SideBar users={users} setDisplayUserInfo={setDisplayUserInfo} onClickUser={onClickUser}/>
            )}
           <div className='scn-card'>
             <Outlet/>
           </div>
        </div>
      </div>
    )
}

export default Layout