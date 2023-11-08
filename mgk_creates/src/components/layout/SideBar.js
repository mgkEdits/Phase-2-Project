import React from 'react'
import User from './User'

function SideBar({users}) {

const userList = users.map((user) => {
  return <User key={user.id} user={user} 
    onSelect={onSelect}/> 
})


  return (
    <div className='scn-sideBar'>
    <ul>{userList}</ul>
   </div>
  )
}

export default SideBar