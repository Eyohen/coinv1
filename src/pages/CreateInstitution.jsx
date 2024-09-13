import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { PiDownloadSimpleFill } from "react-icons/pi";
import logo from '../assets/logo.png'

const statuses = [
    {id:1, status:'Active'},
    {id:2, status:'Pending'},
    {id:3, status:'InActive'},
]

const CreateInstitution = () => {
    const [selectedStatus, setSelectedStatus] = useState('')

    const handleStatus = (e) => {
        setSelectedStatus(e.target.value)
    }

  return (
    <div className='bg-gray-100 h-[100vh]'>
        <Sidebar />
        <div className='flex-1 ml-[330px] py-9'>

            <div className='border bg-white rounded-xl w-[1200px]'>
                <div className='bg-gray-200 py-6 rounded-t-xl'>
                <p className='text-2xl font-semibold px-6'>Create Institution Information</p>
                </div>

                <div className='py-9 px-6'>
                    <div className='grid grid-cols-2 gap-x-9 gap-y-9'>
                        <div>
                        <p className='font-semibold text-lg'>
                            School Id
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                            School Name
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                            Contact
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>


                    <div>
                        <p className='font-semibold text-lg'>
                       Email Address
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                           Date Joined
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                         State
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                            Country
                        </p>
                        <input className='border border-gray-300 py-2 px-2 rounded-lg w-full'/>
                    </div>

                    <div>
                        <p className='font-semibold text-lg'>
                          Status
                        </p>

          <select value={selectedStatus} onChange={handleStatus} className='border border-gray-300 py-2 px-2 rounded-lg w-full focus:outline-none'>
            <option value=""></option>
            {statuses?.map(item => (
              <option key={item.id} value={item.status}>{item.status}</option>
            ) )}
          </select>

  
                    </div>

                    <button className='bg-blue-500 px-4 py-2 rounded-lg text-white'>Save</button>

                </div>
                

                </div>



            </div>




        

        </div>
        </div>
  )
}

export default CreateInstitution