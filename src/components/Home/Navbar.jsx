import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineUserAdd, AiOutlineUser, AiOutlineSetting, AiOutlineFieldTime} from 'react-icons/ai';


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (    
  <div className=' h-10 w-full bg-[#f3f3f3]'>

      <ul className='hidden sm:flex justify-end'>
        <li className='flex p-1 ml-2 mr-2 mt-1'><AiOutlineFieldTime className='w-6 h-6'/></li>
        <li className='flex p-1 ml-2 mr-2 mt-1'><AiOutlineSetting className='w-6 h-6'/></li>
        <li className='flex p-1 ml-2 mr-2 mt-1 bg-blue-300 rounded-full'><AiOutlineUser className='w-6 h-6'/></li>
        <li className='flex p-1 ml-2 mr-2 mt-1  bg-[#d3d3d3] rounded-lg'><AiOutlineUserAdd className='w-6 h-6'/> Add</li>
      </ul>

    <div onClick={handleNav} className='block sm:hidden'>
    <AiOutlineMenu className='h-6 w-6 ml-2' />
    </div>

    <div className={nav ? 'fixed top-0 left-0 pt-4 w-[30%] h-full ease-in-out duration-500 bg-white sm:hidden' : ' ease-in duration-500 fixed left-[-100%]'}> 

      <div onClick={handleNav} className='flex justify-end'>
      <AiOutlineClose size={20} className='mr-2'/>
      </div>

      <ul className='pl-2 pr-2'>
      <li className='border-b border-gray-300 py-2'>My Account</li>
      <li className='border-b border-gray-300 py-2'>Settings</li>
      <li className='border-b border-gray-300 py-2'>Timer</li>
      <li className='border-b border-gray-300 py-2'>Add Member</li>
      </ul>
    </div>
      
  </div>
  )
}

export default Navbar
