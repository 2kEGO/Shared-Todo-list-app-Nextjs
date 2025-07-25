import React from 'react'

const NewTask = () => {
  return (
    <>
      {/* CREATE NEW TASK BUTTON */}
      <div className='flex flex-1 items-center justify-start pt-2'>
        <button className='w-[50%] h-[60%] rounded-full cursor-pointer z-1'
          style={{ backgroundColor: 'var(--primary-black-color)' }}
        >

          <div className='flex items-center justify-start pl-6 gap-2'>
            <span className='text-white'>+</span>
            <span className='text-white'>Create New Task</span>
          </div>
          
        </button>
      </div>
    </>
  )
}

export default NewTask