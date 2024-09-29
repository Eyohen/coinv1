import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-blue-300 px-48 py-16'>
        <p className='text-white font-bold text-3xl'>Scrum Open</p>
        <p className='text-white text-xl font-medium mt-4'>Assess your basic Scrum knowledge</p>
        </div>
        <div className='flex gap-x-6 font-medium mt-9 px-48 items-center'>
        <p>Home</p>
        <RiArrowRightSLine />
        <p>Open Assessment </p>
        <RiArrowRightSLine />
        <p>Scrum Open</p>
        </div>

        <div className='mt-16'>
            <p className='px-48'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='mt-9'>
            <p className='px-48'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


<div className='text-center'>
<Link to={'/instruction'}><button className='mt-9 bg-blue-500 text-white px-4 py-2 rounded font-medium'>Start Assessment</button></Link>
</div>


    </div>
  )
}

export default Home