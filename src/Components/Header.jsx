import React from 'react'
import Advertisement from './Advertisement'

const Header = () => {
  return (
    <div className='w-full h-[60vh] p-5 flex justify-center '>
        <div className='w-[65vw]   bg-[#ffffff]   flex items-center justify-center '>  
          <div className='bg-[#f7463d] w-[85%] h-full   p-7 flex items-center justify-center flex-col rounded-b-full'>
            <h1 className='text-[5.8rem] font-bold text-center text-white px-[5rem]  leading-[7.3rem] '>जनहित मिशन <br /> डॉट कॉम</h1>
            <div className='flex items-center justify-end flex-col  p-[2rem] '>
              <h3 className='text-5xl text-[#671c98] font-bold'>समाचार विचार पोर्टल</h3>
            </div>
          </div>
        </div>
        
        <div className='w-[35vw] h-full    border-b-2'>
          <Advertisement/> 
        </div>
    </div>
  )
}

export default Header                                                             