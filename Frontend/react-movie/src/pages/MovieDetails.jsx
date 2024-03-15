import React from 'react'
import Title from '../component/Title'
import Review from '../component/Review'

const MovieDetails = (props) => {
    console.log('defet')
  return (
    <div >
        <div className='flex flex-row items-center w-full justify-between pr-24'>
            <Title title={'rfvryhy6hy6 fvr '}/>
            <div className="rate text-indigo-500 text-4xl font-semibold">9/10 </div>
        </div>

            <Review/>
    </div>
  )
}



export default MovieDetails