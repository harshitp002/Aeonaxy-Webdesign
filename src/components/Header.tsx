
import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import { BsPaypal } from "react-icons/bs";
import { FaCog, FaChartLine, FaWallet, FaExchangeAlt, FaHandshake, FaClipboardList, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const sidebarRef = useRef(null);
    const subMenuItems = [
        {
            name: "Settings",
            icon: FaCog,
            menus: [
                { label: "Account", path: "/" },
                { label: "Security", path: "/" },
                { label: "Data & Privacy", path: "/" },
                { label: "Payments", path: "/" },
                { label: "Notifications", path: "/" },
                { label: "Seller Tools", path: "/seller-tools" },
                { label: "Statements and taxes", path: "/" },
            ],
        },
    ];

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleOutsideClick = (event: { target: any; }) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
            setActiveSubmenu(null);
        }
    };


    const toggleSubmenu = (index: number) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const navItems = [
        { label: 'Dashboard', icon: FaChartLine },
        { label: 'Finances', icon: FaWallet },
        { label: 'Send and Request', icon: FaExchangeAlt },
        { label: 'Deals', icon: FaHandshake },
        { label: 'Wallet', icon: FaWallet },
        { label: 'Activity', icon: FaClipboardList },
        { label: 'Help', icon: FaQuestionCircle },
    ];

    return (
        <nav className="bg-blue-900  h-20 md:h-24 py-4 px-6 md:px-40 text-base flex justify-between items-center relative z-50 ">
           
           {/* Desktop view { no sidebar} */}
            <div className="text-white font-thin flex items-center">

                <Link to="/"><BsPaypal className="text-white mr-3 md:mr-8 w-8 text-3xl cursor-pointer" /></Link>
                <Link to="/"><span className='text-xl md:hidden font-semibold cursor-pointer'>PayPal</span></Link>


                <div className="hidden  md:flex space-x-8">

                    {navItems.map(({ label }) => (
                        <div
                            key={label}
                            className=" hover:text-blue-300 cursor-pointer"
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-8 text-white text-base ">
                < IoIosNotifications className=" cursor-pointer hidden md:inline text-xl hover:text-blue-500" />
                <FaCog className=" cursor-pointer hidden md:inline hover:text-blue-500" onClick={toggleNav} />
                <button className="text-white hidden md:inline font-normal rounded hover:text-blue-500">Log Out</button>
                <IoMenu
                    className="text-white text-2xl font-semibold cursor-pointer md:hidden"
                    onClick={toggleSidebar}
                />
            </div>
            {isNavOpen && (
                <div className="absolute top-full left-0 w-full bg-blue-900  text-white z-10">
                    <Navigation />
                </div>
            )}
            

            {/* Sidebar  for only mobile view*/}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                        className="fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white z-50 p-4 "
                    >

                        <div className="flex justify-between mb-4 text-2xl font-semibold ">
                            <div className='flex flex-row items-center justify-start text-white'>
                                <Link to="/"><BsPaypal className=" mr-3 md:mr-8 w-8  " /></Link>
                                <Link to="/"><span className=' font-semibold '>PayPal</span></Link>
                            </div>
                            <IoIosNotifications className="text-white mt-[4px] hover:text-blue-500" />
                        </div>

                        <hr />


                        <ul >
                            {navItems.map(({ label, icon: Icon }) => (
                                <li
                                    key={label}
                                    className="py-2 my-1 hover:text-white hover:bg-blue-500 hover:rounded-md hover:pl-2 cursor-pointer flex items-center"
                                >
                                    <Icon className="mr-2" /> {label}
                                </li>
                            ))}

                            <li><hr /></li>
                            <li>
                                {subMenuItems.map(({ name, icon: Icon, menus }, index) => (
                                    <li key={name} className="py-2 flex flex-col  ">
                                        <div
                                            className="flex py-2 items-center cursor-pointer hover:text-white hover:bg-blue-500 hover:rounded-md hover:pl-2 "
                                            onClick={() => toggleSubmenu(index)}
                                        >
                                            <Icon
                                                className={`text-white hover:text-blue-500 mr-2 ${activeSubmenu === index ? 'text-white' : ''
                                                    }`}
                                            />
                                            <span
                                                className={`font-semibold  ${activeSubmenu === index ? 'text-white' : ''
                                                    }`}
                                            >
                                                {name}
                                            </span>
                                        </div>
                                        {activeSubmenu === index && (
                                            <ul className="ml-8 mt-2">
                                                {menus.map(({ label, path }) => (
                                                    <li
                                                        key={path}
                                                        className="py-1 hover:text-blue-500 cursor-pointer"
                                                    >
                                                        <Link to={path}>{label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </li>

                        </ul>

                        <div className="flex items-start hover:w-56 py-1 text-white font-normal  hover:text-white hover:bg-blue-500 hover:rounded-md  ">
                            <FaSignOutAlt className='text-2xl mt-1 p-1 mr-1 ' />
                            <div className="flex items-start hover:w-64 text-white font-normal my-1 hover:text-white hover:bg-blue-500 hover:rounded-md hover:pl-2  ">
                                Log Out
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={`fixed inset-0 bg-black opacity-50 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`}></div>
        </nav>
    );
};

export default Header;

