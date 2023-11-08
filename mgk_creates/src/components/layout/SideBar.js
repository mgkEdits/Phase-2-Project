import React from 'react'

function SideBar({users,setSelectedUser}) {
  const handleUserCardClick = (userName) => {
    setSelectedUser(userName);
  };

  return (
    <div className='scn-sideBar'>
    {
      users.map((user) => (
        <div className='user-cardWrapper'key={user.id}>
        <div className='user-card' onClick={() => handleUserCardClick(user.login)}>
          <div>
          <img  className='avatar' src={user.avatar_url} alt={user.login}></img>
          </div>
          <div>
          <h4>{user.login}</h4>
          </div>
        </div>
      </div>
      ))
    }
   </div>
  )
}

export default SideBar