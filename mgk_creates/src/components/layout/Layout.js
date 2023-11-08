import React from 'react'
import { Outlet } from 'react-router-dom'
import './../styles/layout.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import SearchBar from './SearchBar'

function Layout () {

    return (
      <div className='section-main'>
        <NavBar/>
        <SearchBar/>
        <div className='section-body'>
           <SideBar/>
           <div className='scn-card'>
             <Outlet/>
           </div>
        </div>
      </div>
    )
}

export default Layout