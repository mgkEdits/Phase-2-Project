import React from 'react'
import { Link } from 'react-router-dom'

 function NavBar() {
  return (
    <div className='scn-navBar'>
    <div className='left-navBar'>
      <h2>Git-BoostRepo</h2>
    </div>

    <div className='right-navBar'>
      
      <a href=''><Link to="/">Home</Link></a>
      <a href=''><Link to="contactUs">Contact</Link></a>
      <a href=''><Link to="aboutUs">About Us</Link></a>
      <a href='https://github.com/'><Link to="https://github.com/">  GitHub</Link></a>
    </div>
    
    </div>
  )
}

export default NavBar