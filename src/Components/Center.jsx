import React from 'react'
import MainNews from './MainNews'
import SideNews from './SideNews'

const Center = () => {
  return (
    <div className='w-full h-fit  flex'>
      <MainNews/>
      <SideNews/>
    </div>
  )
}

export default Center