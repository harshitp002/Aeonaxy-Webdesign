import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsCheck2Circle } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";


const ProductLink = () => {
    return (
        <div className="flex flex-col items-center justify-top py-6   bg-gray-100">
            <div className="bg-white w-80 md:w-96 h-[540px] md:h-[510px] p-4 rounded-lg shadow-md max-w-md text-center">
                <div className="text-green-400  text-8xl mb-4 flex items-center justify-center">
                    < BsCheck2Circle />
                </div>
                <h2 className="text-2xl font-thin mb-4">Your product link is ready</h2>
                <p className="mb-6">
                    You can spread the word by sharing this link on - email, social media, chat, whatsapp and more
                </p>
                <div className="flex justify-center space-x-16 my-12 text-4xl text-blue-600 ">
                    <FaFacebook className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                    <BsQrCode className=" cursor-pointer" />
                </div >
                <div className='flex flex-col items-center justify-center text-center space-y-4 my-12 font-medium text-base '>
                    <button className="bg-blue-600 text-white w-72 md:w-80 h-12 rounded-full mb-4">Get link</button>
                    <button className=" border-blue-600 solid border-[1px] py-2  w-72 md:w-80 h-12 rounded-full ">Return To Dashboard</button>
                </div>
            </div>
        </div>
    );
};

export default ProductLink;