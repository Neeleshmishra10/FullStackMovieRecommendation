import React from 'react'
import Title from '../component/Title'

export default function AddMovie() {
  return (
    <div className='mt-20'>
   <Title title='Add new Movie '></Title>
   <form action="" className='flex flex-col gap-4 bg- p-8 w-96'>

    <input type="text" className='border p-4' placeholder='Name' />
    <input type="text" className='border p-4' placeholder='Release Date'></input>
    <button className='bg-indigo-500 w-36 p-4'>Create Movie</button>
   </form>

   </div>
  )
}
