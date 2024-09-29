import React from 'react'
import Navbar from '../components/Navbar'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const Instruction = () => {
  return (
    <div>
        <Navbar/>
        <p className='mt-12 px-48 font-bold text-2xl'>Basic Competency Exam</p>


<div className='flex justify-center'>
        <div className='bg-gray-100 px-9 py-9 w-[1000px] mt-9'>
            <p className='font-semibold text-lg'>Instructions</p>
            <p className='flex items-center gap-x-2 mt-6'><GoDotFill />Number of questions: <span className='font-bold'>30</span></p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Has a time limit of: <span className='font-bold'>01:00:00</span></p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Must be finished in one sitting. You cannot save and finish later</p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Questions displayed per page: <span className='font-bold'>1</span></p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Will allow you to go back and change your answers.</p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Will not let you finish with any questions unattempted.</p>
            <p className='flex items-center gap-x-2 mt-3'><GoDotFill />Has a pass mark of:  <span className='font-bold'>85%</span></p>


        </div>
        </div>
        
        <div className='w-[1000px] mx-auto'>
            <div className='flex justify-end'>
<Link to={'/exampage'}><button className='mt-9 bg-blue-500 text-white px-6 py-2 rounded font-medium'>Continue</button></Link>
</div>
</div>





    </div>
  )
}

export default Instruction