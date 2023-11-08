import React from 'react'

function User({user}) {
  return (
    <div className='user-cardWrapper'>
      <div className='user-Card'>
        <img  className='avatar' src={user.avatar_url} alt={user.login}></img>
        <h4>{user.login}</h4>
      </div>
    </div>
  )
}

export default User