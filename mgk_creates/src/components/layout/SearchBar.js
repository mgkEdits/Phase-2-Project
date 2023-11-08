import React from 'react'

function SearchBar() {
  return (

    <div className='github-form'>
        <form id='github-form'>
        <input className='search' id='search' type='text'placeholder='Search User' name='search'/>
        <input className='search-btn' type='submit' name='submit'/>
        </form>
      </div>
  )
}

export default SearchBar