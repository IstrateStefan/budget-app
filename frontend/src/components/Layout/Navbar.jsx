import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import ProfileMenu from './ProfileMenu';
import { FaHome } from 'react-icons/fa';
import { FaChartPie } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';
import { IoPricetagsSharp } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {
  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? `text-blue-500` : ''}`
          }
          to="/"
        >
          <FaHome size={24} />
          <div>Home</div>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? `text-blue-500` : ''}`
          }
          to="/graph"
        >
          <FaChartPie size={24} />
          <div>Graph</div>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? `text-blue-500` : ''}`
          }
          to="/transaction"
        >
          <GrTransaction size={24} />
          <div>Transaction</div>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? `text-blue-500` : ''}`
          }
          to="/category"
        >
          <IoPricetagsSharp size={24} />
          <div>Category</div>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? `text-blue-500` : ''}`
          }
          to="/settings"
        >
          <IoMdSettings size={24} />
          <div>Settings</div>
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <nav>
      <div className="w-full p-6 flex items-center justify-between text-blue-gray-900">
        <NavLink to="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          Budget App
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
