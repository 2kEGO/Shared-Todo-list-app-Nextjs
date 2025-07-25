import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  
  const getDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className='flex flex-row flex-1 pt-4 mb-4'>
        
        <div className='flex flex-1 flex-col'>
          <h1 className='text-lg font-bold text-black'>Good Morning, Name</h1>
          <br />
          <h2>{getDate()}</h2>
        </div>

        <div className='flex basis-[20%] items-start justify-between gap-2'>

          <div className='flex flex-row items-center gap-1 flex-1 p-2 rounded' style={{ backgroundColor: 'var(--primary-white-color)' }}>
            <button className='p-2 h-8 w-8 flex justify-center items-center rounded' style={{ backgroundColor: 'var(--primary-silver-color)' }}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <h1>Today</h1>
          </div>

          <div className='basis-[20%] flex flex-row items-center gap-1 p-2 rounded' style={{ backgroundColor: 'var(--primary-white-color)' }}>
            <button className='flex items-center justify-center p-2 h-8 w-8'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Header