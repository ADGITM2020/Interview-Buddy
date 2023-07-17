import React, { useState } from 'react'
import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs';
import {MdOutlineScreenShare, MdOutlineStopScreenShare, MdCallEnd} from 'react-icons/md';

const Footer = () => {
  const [mike, setMike] = useState(false);
  const [cam, setCam] = useState(false);
  const [sc, isSc] = useState(false);

  const handleMike = () => {
    setMike(!mike);
  };
  const handleCam = () => {
    setCam(!cam);
  };

  const handleSc = () => {
    isSc(!sc);
  };

  return (
    <div className='w-full fixed bottom-0 h-10 bg-[#F3F3F3]'>
      <ul className='flex justify-center'>
        <li onClick={handleMike} className='flex ml-2 mr-2 mt-1'>
        {mike ? <BsFillMicMuteFill size={30} className='p-1 rounded-full bg-red-300'/> : <BsFillMicFill size={30}className='p-1 rounded-full bg-blue-300'/>}
        </li>
        <li onClick={handleCam} className='flex ml-2 mr-2 mt-1'>
        {cam ? <BsFillCameraVideoOffFill size={30} className='p-1 rounded-full bg-red-300'/> : <BsFillCameraVideoFill size={30} className='p-1 rounded-full bg-blue-300'/>}
        </li>
        <li onClick={handleSc} className='flex ml-2 mr-2 mt-1'>
        {sc ? <MdOutlineScreenShare size={30} className='p-1 rounded-full bg-blue-300'/>: <MdOutlineStopScreenShare size={30} className='p-1 rounded-full bg-slate-200'/> }
        </li>
        <li className='flex ml-2 mr-2 mt-0'>
          <MdCallEnd size={40} className='pl-1 pr-1 bg-red-500 border-y-4 rounded-2xl'/>
        </li>

      </ul>

    </div>
  )
}

export default Footer
