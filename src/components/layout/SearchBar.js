import React from 'react'

function SearchBar({searchUser}) {

    const handleChange =(event) =>{
        searchUser (event.target.value);
    };

  return (
    <div className='github-form'>
        <form id='github-form'>
        <input className='search' onChange={handleChange} type='text' placeholder='Search User' name='search'/>
        </form>
      </div>
  )
}

export default SearchBar