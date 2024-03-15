import React from 'react'
import {Link, Route} from 'react-router-dom'
const Cards = () => {
  return (
    <Link to={'/details'}>
    <div className=' w-64 p-5 bg-[#e0defd]'>
       <h1 className='moviename text-lg font-semibold text-gray-700 '>hero sadf asdf </h1>
       <h1 className='rating italic'>23</h1>
       <h1 className='relasedate text-black font-bold'>wjndka</h1>
    </div>
    </Link>
  )
}

export default Cards