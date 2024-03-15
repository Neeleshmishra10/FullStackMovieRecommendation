import React from 'react'

const Title = (props) => {
  return (
    <h1 className='text-3xl my-8 ml-10 text-gray-800 font-semibold'>
        {props.title}
    </h1>
  )
}

export default Title