"use client"
import React from 'react'
import Header from './Header'
import Tasks from './Tasks'


const MainContent = () => {
  return (
    <>
        <div className='flex flex-1 px-24'>
            <Header/>
            <Tasks/>
        </div>
    </>
  )
}

export default MainContent