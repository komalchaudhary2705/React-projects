import React from 'react'
import Sidear from './Sidear'
import Rightsection from './Rightsection'

const MainSection = () => {
  return (
    <div className='flex justify-center pt-10'>
        <div className='bg-white w-[85%] h-[80vh] rounded'>
        <div className='flex w-full h-full'>
            <Sidear/>
            <Rightsection/>
        </div>
        </div>
       
        </div>
  )
}

export default MainSection