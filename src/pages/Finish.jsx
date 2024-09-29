import React from 'react'
import Navbar from '../components/Navbar'

const Finish = () => {
  return (
    <div>
        <Navbar/>

        
<div className='flex flex-col justify-center items-center mt-24'>
        <div className='border-2 w-[900px] py-9 px-6 rounded-lg shadow-lg'>

            <p className='mt-12 font-bold'>Percentage: <span className='font-normal'>76.7%</span> </p>
            <p className='mt-12 font-bold'>Duration: <span className='font-normal'>00:15:04</span> </p>
            <p className='mt-12 font-bold'>Date started: <span className='font-normal'>Thu 26 Sep 2024 08:08</span> </p>
            <p className='mt-12 font-bold'>Date finished: <span className='font-normal'>Thu 26 Sep 2024 09:08</span> </p>
        </div>
    </div>

    </div>
  )
}

export default Finish