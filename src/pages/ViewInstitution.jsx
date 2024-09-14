import React from 'react'
import Sidebar from '../components/Sidebar'
import { PiDownloadSimpleFill } from "react-icons/pi";
import logo from '../assets/logo.png'

const ViewInstitution = () => {
  return (
    <div className='bg-gray-100 h-[100vh]'>
        <Sidebar />
        <div className='flex-1 ml-[300px] py-9'>

<div className='flex gap-x-4'>



<div>
    <div className='bg-white flex py-4 px-4 gap-x-2 rounded-lg border border-gray-300'>
    <img src={logo} className='w-24' />
    <div>
    <p className='font-semibold text-lg'>Government</p>
    <p>T849126</p>
    <p>Joined : 25 May 2024</p>
    </div>
    </div>

    <div className='bg-white border border-gray-300 rounded-xl p-6 w-[350px] mt-16'>
            <p className='text-xl font-semibold'>Primary Contact Info</p>
            <p className='text-xl font-semibold mt-4'>Phone Number</p>
            <p className='text-gray-500 text-lg'>+1 46548 84498</p>

            <p className='text-xl font-semibold mt-4'>Email Address</p>
            <p className='text-gray-500 text-lg'>jan@example.com</p>

            </div>

</div>




<div>
        {/* <div className='bg-white border border-gray-300 rounded-xl p-6'>
            <p className='text-xl font-semibold'>Details</p>
            <div className='border-b border-gray-300 mt-4'></div>

            
        <div className='bg-white border border-gray-300 rounded-xl p-6 mt-12'>
            
    <div className='flex gap-x-96 max-w-[1300px]'>

            <div className='max-w-[200px]'>
            <p className='text-xl font-semibold'>School Name</p>
            <p className='text-gray-500 text-lg'>Government Primary/Secondary</p>
            </div>

            <div className='max-w-[200px]'>
            <p className='text-xl font-semibold'>Contact Number</p>
            <p className='text-gray-500 text-lg'>Government Secondary</p>
            </div>

            <div className='max-w-[200px]'>
            <p className='text-xl font-semibold'>Date Joined</p>
            <p className='text-gray-500 text-lg'>Government Secondary</p>
            </div>

            </div>

            <div className='flex gap-x-96 max-w-[1300px] mt-12'>

<div className='max-w-[200px]'>
<p className='text-xl font-semibold'>Total No. of Teachers</p>
<p className='text-gray-500 text-lg'>Government Secondary</p>
</div>

<div className='max-w-[200px]'>
<p className='text-xl font-semibold'>School Type</p>
<p className='text-gray-500 text-lg'>Primary ,Secondary</p>
</div>

<div className='max-w-[200px]'>
<p className='text-xl font-semibold'>Location</p>
<p className='text-gray-500 text-lg'>Cross River, Nigeria</p>
</div>

</div>
        </div> 
        </div>*/}
          <div className='bg-white border border-gray-300 rounded-xl p-6'>
              <p className='text-xl font-semibold'>Details</p>
              <div className='border-b border-gray-300 mt-4'></div>

              <div className='bg-white border border-gray-300 rounded-xl p-6 mt-12'>
                <div className='grid grid-cols-3 gap-x-8 gap-y-12'>
                  <div>
                    <p className='text-xl font-semibold'>School Name</p>
                    <p className='text-gray-500 text-lg'>Government Primary/Secondary</p>
                  </div>
                  <div>
                    <p className='text-xl font-semibold'>Contact Number</p>
                    <p className='text-gray-500 text-lg'>Government Secondary</p>
                  </div>
                  <div>
                    <p className='text-xl font-semibold'>Date Joined</p>
                    <p className='text-gray-500 text-lg'>Government Secondary</p>
                  </div>
                  <div>
                    <p className='text-xl font-semibold'>Total No. of Teachers</p>
                    <p className='text-gray-500 text-lg'>Government Secondary</p>
                  </div>
                  <div>
                    <p className='text-xl font-semibold'>School Type</p>
                    <p className='text-gray-500 text-lg'>Primary, Secondary</p>
                  </div>
                  <div>
                    <p className='text-xl font-semibold'>Location</p>
                    <p className='text-gray-500 text-lg'>Cross River, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>


<div className='flex gap-x-9'>



        <div className='bg-white border w-full border-gray-300 rounded-xl p-6 mt-12'>
            <p className='text-xl font-semibold'>Documents</p>
            <div className='border-b border-gray-300 mt-4'></div>

            
        <div className='bg-white border border-gray-300 rounded-xl px-4 py-3 mt-12'>
            <div className='flex justify-between items-center'>
            <p text-xl className='font-semibold'>Resume.pdf</p>
            <div className='bg-violet-950 text-white w-[42px] rounded-lg p-2'><PiDownloadSimpleFill size={25} /></div>
            </div>
        </div>

        <div className='bg-white border border-gray-300 rounded-xl px-4 py-3 mt-6'>
            <div className='flex justify-between items-center'>
            <p text-xl className='font-semibold'>Resume.pdf</p>
            <div className='bg-violet-950 text-white w-[42px] rounded-lg p-2'><PiDownloadSimpleFill size={25} /></div>
            </div>
        </div>

        </div>


        <div className='bg-white border w-full border-gray-300 rounded-xl p-6 mt-12'>
            <p className='text-xl font-semibold'>Address</p>
            <div className='border-b border-gray-300 mt-4'></div>

            <p className='text-lg text-gray-700 font-semibold mt-3'>Current Address</p>
            <p className='text-gray-500 text-lg max-w-[400px]'>3495 Red Hawk Road, Buffalo Lake, MN 55314</p>

            
            <p className='text-lg text-gray-700 font-semibold mt-3'>Permanent Address</p>
            <p className='text-gray-500 text-lg max-w-[400px]'>3495 Red Hawk Road, Buffalo Lake, MN 55314</p>
      

        </div>
        </div>


  </div>

        </div>
        

        </div>
        </div>
  )
}

export default ViewInstitution