import React from 'react'
function Home () {

  
    return (
      <div className="header-content">
              <div className="container grid-2">
                <div className="column-1">
                  <h1 className="header-title">Welcome to Git-Boost</h1>
                  <p className="text">
                  Welcome to Git-Boost, your go-to platform for collaborative coding! We believe in the power of collaboration, and Git-Boost is designed to make your development journey smoother and more enjoyable.</p>
                 
                  <p className='text'>Discover the powerhouse behind Git-Boost – our incredible team awaits you on the right! Glide through their profiles and witness the magic they bring to the coding realm. Each member is a maestro, weaving their unique expertise into the collaborative symphony of innovation.</p>
                  
                  <p className='text'>It's not just about code; it's about the stories etched in every collaboration, the challenges conquered, and the solutions crafted with finesse. Join us on this visual journey, where each team member is a character in the captivating narrative of Git-Boost's success. Explore, be inspired, and get ready to be amazed by the tales of collaboration that have shaped our remarkable journey. Welcome to the vibrant world of Git-Boost, where every team member is a star, and every collaboration is a masterpiece!</p>
                  
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