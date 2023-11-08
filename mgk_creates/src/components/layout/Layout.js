import React from 'react'
import { Outlet } from 'react-router-dom'
import './../styles/layout.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import SearchBar from './SearchBar'

function Layout () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('`https://api.github.com/search/users?q=${searchContent}`')
    .then((response) => response.json())
    .then((data) => { setUsers(data); })

    console.log(users)
    }, []);

    return (
      <div className='section-main'>
        <NavBar/>
        <SearchBar/>
        <div className='section-body'>
           <SideBar users={users}/>
           <div className='scn-card'>
             <Outlet/>
           </div>
        </div>
      </div>
    )
}

export default Layout