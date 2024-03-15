import React from 'react'
import Title from '../component/Title'

export default function AddReview() {
  return (
    <div className='mt-20'>
   <Title title='Add new Review '></Title>
   <form action="" className='flex flex-col gap-4 bg- p-8 w-96'>
   
    <input type="text" className='border p-4' placeholder=' Your Name' />
    <input type="text" className='border p-4' placeholder='Rating out of 10'></input>
    <textarea placeholder='Review Comments'className='border p-4' ></textarea>
    <button className='bg-indigo-500 w-36 p-4'>ADD Review</button>
   </form>

   </div>
  )
}
