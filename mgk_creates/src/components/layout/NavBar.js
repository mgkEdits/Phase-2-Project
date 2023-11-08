import React from 'react'
import { Link } from 'react-router-dom'

 function NavBar() {
  return (
    <div className='scn-navBar'>
    <div className='left-navBar'>
      <h2>GitHub</h2>
      <img src='./../../images/github.png' alt='logo'/>
    </div>

    <div className='right-navBar'>
      
      <a href=''><Link to="/">Home</Link></a>
      <a href=''><Link to="contactUs">Contact</Link></a>
      <a href=''><Link to="aboutUs">About Us</Link></a>
      <a href='https://github.com/'><img src='./../../images/github.png' alt='logo'/></a>
    </div>
    
    </div>
  )
}

export default NavBar