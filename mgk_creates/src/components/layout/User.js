import React from 'react'

function User({user, onClick}) {

  return (
    <div className='user-cardWrapper'>
      <div className='user-Card' onClick={onClick}>
        <img  className='avatar' src={user.avatar_url} alt={user.login}></img>
        <h4>{user.login}</h4>
      </div>
    </div>
  )
}

export default User