import React from 'react';
import footer from '../assets/footer.png';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-[100%] h-[25vh] bg-[#c12f2f] flex flex-col justify-center items-center'>
        <div className='w-[100%] relative flex justify-center'>
        <div className='w-[120px] bg-[#c12f2f] px-6 z-20 relative'>
            <img src={footer} alt="Logo" className='w-[100%] z-20'/>
        </div>
        <div className='w-[60%] h-[1px] absolute top-7 bg-white z-10 max-sm:w-[90%]'></div>
        </div>
        <div className='flex items-center gap-2 text-white mt-5'>
            CopyRight<FaRegCopyright/> 2024 <span>AJ</span> 
        </div>
    </div>
  )
}

export default Footer;