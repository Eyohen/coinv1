import React, {useState} from 'react'
// import logo from "../assets/LOGO-BLACK1.png"
import { CiLogout } from "react-icons/ci";
import { FiUsers,FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import { TbCategory } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";
import { IoTrophyOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";


const Sidebar = () => {

//   const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const handleToggleCommunity = () => {
    setIsOpenCommunity(!isOpenCommunity);
  }

//   console.log("sidebar", user)
  return (
    <div className='fixed top-0 left-0 bottom-0 h-screen bg-white'>
    <div className='flex justify-center h-screen px-[40px]'>
        {/* <div>
        <img src={logo} className='w-9 h-9' />
        </div> */}

            <div>
        <p className='text-blue-500 font-bold mt-9'>Menu</p>

        <Link to={'/dashboard'}> <div className='flex gap-x-3 items-center hover:bg-blue-200 px-2 mt-6 rounded'>
    
        <FiUsers className='' />
        <p className=' py-1 text-center '>Dashboard</p>
        </div></Link>

        <Link to={'/institution'}> <div className='flex gap-x-3 items-center hover:bg-blue-200 px-2 mt-6 rounded'>
        <BiPurchaseTag />
        <p className='py-1 text-center'>Institutions</p>
        </div></Link>

        <Link to={'/teachers'}><div className='flex gap-x-3 items-center hover:bg-blue-200 px-2 mt-6 rounded'>
        <TbCategory />
       <p className='py-1 text-center'>Teachers</p>
        </div></Link>

{/* 
        <Link to={'/brandtable'}> <div className='flex gap-x-3 items-center hover:bg-blue-200 px-2 mt-6 rounded'>
        <TbCategory />
        <p className='py-1 text-center'>Brands</p>
        </div></Link> */}

    
<Link to={'/questionbank'}><div className='flex gap-x-3 items-center hover:bg-blue-200 px-2 mt-6 rounded'>
        <GoPackage />
        <p className='py-1 text-center'>Question bank</p>
        </div></Link>

       <div className='flex gap-x-3 items-center hover:bg-[#e6e6fa] px-2 mt-6 rounded'>
        <IoSettingsOutline className=''/>
        <p className='py-1 text-center'>Settings</p>
        </div>

        {/* <div className='flex gap-x-3 items-center hover:bg-[#F3D8A7] px-2 mt-6 rounded'>
        <IoChatboxOutline className=''/>
        <p className='hover:bg-[#F3D8A7] py-1 text-center'>Contact Support</p>
        </div> */}

        <p className='text-blue-500 font-bold mt-9 '>Profile</p>


        <div className='flex gap-x-5 items-center mt-9 '>
        <div className='bg-blue-500 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>J</div>
        <div>
            {/* <p className='font-semibold text-lg'>{user?.fname},{user?.lname}</p>
            <p className='font-light text-gray-400'>{user?.email}</p> */}
            <p className='font-semibold text-lg'>John,Doe</p>
            <p className='font-light text-gray-400'>johndoe@gmail.com</p>
        </div>
        </div>

        <Link to={'/'}><div className='flex items-center gap-x-3 mt-9 justify-center'>
        <CiLogout />
        <p>Log out</p>
        </div></Link>

        </div>

        </div>
    </div>
  )
}

export default Sidebar
