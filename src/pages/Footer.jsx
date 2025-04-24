import React from 'react';
import footer from '../assets/footer.png';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-[100%] h-[25vh] bg-clr-red flex flex-col justify-center items-center dark:bg-[#1f2d3a]'>
        <div className='w-[100%] relative flex justify-center'>
        <div className='w-[120px] bg-clr-red px-6 z-20 relative dark:bg-[#1f2d3a]'>
            <img src={footer} alt="Logo" className='w-[100%] z-20'/>
        </div>
        <div className='w-[60%] h-[1px] absolute top-7 bg-white z-10 max-sm:w-[90%]'></div>
        </div>
        <div className='flex items-center gap-2 text-white mt-5 dark:text-clr-red'>
            CopyRight<FaRegCopyright/> 2024 <span>AJ</span> 
        </div>
    </div>
  )
}

export default Footer;