import React from 'react'
function Home () {

  
    return (
      <div className="header-content">
              <div className="container grid-2">
                <div className="column-1">
                  <h1 className="header-title">Welcome to Git-Boost</h1>
                  <p className="text">
                  Welcome to Git-Boost, your go-to platform for collaborative coding! We believe in the power of collaboration, and Git-Boost is designed to make your development journey smoother and more enjoyable.</p>
                  <p className='text'>Whether you're a front-end wizard, a back-end guru, or a full-stack maestro, Git-Boost provides the tools you need to showcase your skills and collaborate seamlessly with fellow developers.</p>
                  <a href="#" className="btn">Download CV</a>
                </div>
    
                <div className="column-2 image">
                  <img
                    src="./../images/GitHub_Logo.png"
                    className="points points2"
                    alt=""
                  />
                  <img src="./img/person.png" className="img-element z-index" alt="" />
                </div>
              </div>
       </div>
    )
}

export default Home 