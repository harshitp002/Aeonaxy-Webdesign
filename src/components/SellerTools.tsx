import React from 'react';
import { BsPaypal } from "react-icons/bs";
import { IoIosLaptop } from "react-icons/io";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-medium ">{title}</h2>
);

const SellingOnline = () => (
    <div>
        <SectionHeading title="Selling online" />
        <p className="mt-2 mb-6 text-base text-slate-800/65 font-medium">Grow your business by making it easier for your customers to pay you.</p>
        <div className="flex flex-row items-center justify-between space-x-4  border-2 rounded-2xl p-4  mb-4 w-80 md:w-3/4">
            <BsPaypal className="text-8xl md:text-5xl text-blue-500 bg-slate-200 rounded-full  py-1  px-1 md:px-3 w-40 md:w-16  h-10 md:h-12  mb-6" />
            <div className=" flex flex-col items-start justify-start">
                <h3 className="font-medium text-lg mb-1">PayPal buttons</h3>
                <p className='text-base text-slate-800/65 font-medium'>Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.</p>
            </div>
            <button className="text-blue-500 font-bold text-base ">Manage</button>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4 border-2 rounded-2xl p-4  mb-4 w-80 md:w-3/4">
            <IoIosLaptop className="text-8xl md:text-5xl text-blue-500 bg-slate-200 rounded-full  py-1  px-1 md:px-3 w-40 md:w-16  h-10 md:h-12  mb-6" />
            <div className=" flex flex-col items-start justify-start">
                <h3 className="font-medium text-lg mb-1">Website preferences</h3>
                <p className='text-base text-slate-800/65 font-medium'>Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.</p>
            </div>
            <button className="text-blue-500 font-bold text-base ">Update</button>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4 border-2 rounded-2xl p-4  mb-4 w-80 md:w-3/4">
            <TbBellRinging2Filled className="text-8xl md:text-5xl text-blue-500 bg-slate-200 rounded-full  py-1  px-1 md:px-3 w-40 md:w-16  h-10 md:h-12  mb-6" />
            <div className=" flex flex-col items-start justify-start">
                <h3 className="font-medium text-lg mb-1">Instant payment notifications</h3>
                <p className='text-base text-slate-800/65 font-medium'>Stay informed by turning on notifications for payments made on your website.</p>
            </div>
            <button className="text-blue-500 font-bold text-base ">Update</button>
        </div>

    </div>
);

const GettingPaid = () => (
    <div>
        <SectionHeading title="Getting paid" />
        <p className="mt-2 mb-6 text-base text-slate-800/65 font-medium"> Choose from various payment tools to attract your customers.</p>
        <div className="flex flex-row items-center justify-between space-x-4 border-2 rounded-2xl p-4  mb-4 w-80 md:w-3/4">
            <FaFileInvoice className="text-8xl md:text-5xl text-blue-500 bg-slate-200 rounded-full  py-1  px-1 md:px-3 w-40 md:w-16  h-10 md:h-12  mb-6" />
            <div className=" flex flex-col items-start justify-start">
                <h3 className="font-medium text-lg mb-1">Invoices</h3>
                <p className='text-base text-slate-800/65 font-medium'>Create professional invoices and customize it as per your requirements to see in the future.</p>
            </div>
            <button className="text-blue-500 font-bold text-base ">Manage</button>
        </div>
    </div>
);

const MoreSellingTools = () => (
    <div>
        <SectionHeading title="More selling tools" />
        <p className="mt-2 mb-6 text-base text-slate-800/65 font-medium">Check out the other tools that we have for you to help you sell online.</p>
        <div className="flex flex-row items-center justify-between space-x-4 border-2 rounded-2xl p-4  mb-4 w-80 md:w-3/4">
            <MdLocalShipping className="text-8xl md:text-5xl text-blue-500 bg-slate-200 rounded-full  py-1  px-1 md:px-3 w-40 md:w-16  h-10 md:h-12  mb-6" />
            <div >
                <h3 className="font-medium text-lg mb-1 ">Shipping preferences</h3>
                <p className='text-base text-slate-800/65 font-medium'>Create your shipping labels for hassle-free returns to get your money back from yourself .</p>
            </div>
            <button className="text-blue-500 font-bold text-base ">Create</button>
        </div>
    </div>
);

const SellerTools: React.FC = () => {
    return (
        <div className="p-6 px-6 md:px-40">
            <h2 className=" text-3xl font-semibold">Sellor Tools</h2>
            <p className="mb-12 mt-2 md:pr-96 text-lg text-slate-800/65 font-medium ">
                Sell online easily and grow your business with Seller Tools. Create PayPal buttons, get instant payment notifications, and do much more.
            </p>
            <div className=' flex flex-col space-y-16 px-4 md:px-16'>
                <SellingOnline />
                <GettingPaid />
                <MoreSellingTools />
            </div>
        </div>
    );
};

export default SellerTools;