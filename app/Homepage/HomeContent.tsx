import React, {useState} from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'

const HomeContent = () => {



  return (
    <>
        <div className='flex flex-row w-full h-screen'>
        
            <div className='flex basis-[15%] h-screen w-full bg-red-200'>
                <SideBar/>
            </div>

            <div className='flex flex-1'>
                <MainContent/>
            </div>
        </div>
    </>
    
  )
}

export default HomeContent