import React from 'react'
import Nav from '../component/Nav'
import Title from '../component/Title'
import Search from '../component/Search'
import Cards from '../component/Cards'

export default function Home() {
  return (
    <div>
        <Title title={'The best movie reviews site!'}></Title>
        <Search/>
        <div className='px-10 my-10'>
        <Cards></Cards>
        </div>
    </div>
  )
}
