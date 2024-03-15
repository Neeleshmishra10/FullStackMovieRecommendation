import React from 'react'

const Search = () => {
  return (
    <div className='flex ml-10 border-2 px-4 py-2 border-indigo-500 items-center justify-around w-96 flex-row'>
        <ion-icon name="search-outline"></ion-icon>
        <input className='px-2 w-full outline-none' placeholder='Search for your favourite movie'></input>
    </div>
  )
}

export default Search