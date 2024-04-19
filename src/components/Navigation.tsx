import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState(null);

  const menuItems = [
    {
      label: 'Account',
      isLink: false,
      to: '/',
    },
    {
      label: 'Security',
      isLink: false,
      to: '/',
    },
    {
      label: 'Data & Privacy',
      isLink: false,
      to: '/',
    },
    {
      label: 'Payments',
      isLink: false,
      to: '/',
    },
    {
      label: 'Notifications',
      isLink: true,
      to: '/',
    },
    {
      label: 'Seller Tools',
      isLink: true,
      to: '/seller-tools',
    },
    {
      label: 'Statements and taxes',
      isLink: false,
      to: '/',
    },
  ];

  const handleButtonClick = (index : any) => {
    if (activeButton === index) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
  };

  return (
    <div className="flex items-center justify-between md:space-x-8 bg-white py-8  md:px-60 h-24 text-black text-base font-medium shadow-xl">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`hover:cursor-pointer rounded-full ${
            activeButton === index
              ?"bg-blue-200 text-blue-900 font-semibold w-36 h-12 text-center flex  items-center justify-center"
              : " "
          }`}
          onClick={() => handleButtonClick(index)}
        >
          {item.isLink ? (
            <Link to = {item.to} className="">
              {item.label}
            </Link>
          ) : (
            <button >{item.label}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
