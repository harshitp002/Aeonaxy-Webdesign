
// import React from 'react';
import { BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-50/90 md:py-4  text-black text-base ">
      <div className="flex flex-col md:flex-row justify-start md:items-center space-y-4  md:space-y-0 md:space-x-8 p-5 md:p-0  mb-3 md:mb-4 md:px-40 h-24  font-medium   ">
        <div className="flex items-center text-2xl  ">
        <BsPaypal className="text-blue-900 mr-3 w-8 h-8 font- semibold" />
        <span className='text-blue-900'>Pay<span className='text-blue-500'>Pal</span></span>
        </div>
        <div className="flex space-x-4 md:space-x-8 pl-6 md:pl-0">
          <span className="hover:text-blue-500 cursor-pointer">Help</span>
          <span className="hover:text-blue-500 cursor-pointer">Contact Us</span>
          <span className="hover:text-blue-500 cursor-pointer">Security</span>
          <span className="hover:text-blue-500 cursor-pointer">Fees</span>
        </div>
      </div>
      <hr  className='bg-slate-300/40 h-1   '/>
      <div className="flex flex-col-reverse md:flex-row justify-start md:items-center space-y-4 space-y-reverse md:space-y-0 md:space-x-8 p-5 md:p-0 md:mb-4 md:px-40 h-24 font-medium">
        <span className=' text-xs md:text-sm text-slate-500 font-thin text-center'>&copy;1999-2024 PayPal, Inc. All rights reserved.</span>
        <div className='pl-6 md:pl-0'>
        <span className="hover:text-blue-500 cursor-pointer ml-0 md:ml-4 ">Privacy</span>
        <span className="hover:text-blue-500 cursor-pointer ml-4">Legal</span>
        <span className="hover:text-blue-500 cursor-pointer ml-4">Policy Updates</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;