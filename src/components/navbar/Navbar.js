import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../../utils/mockData';
import ThemeToggle from '../ThemeToggle'; // Import ThemeToggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 text-black bg-slate-100 dark:text-white dark:bg-black  bg-opacity-80 dark:bg-opacity-90 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between">
        <div className='flex gap-4 items-center justify-center'>
            <img src="./images/mmmutlogo.png" alt="MMMUT ITRC" className="h-10" />
            <h1 className='text-2xl font-semibold'>MMMUT ITCA</h1>
        </div>

        <ThemeToggle /> {/* Add ThemeToggle button here */}
        <ul className="hidden md:flex space-x-4 md:text-md lg:text-lg text-xs">
          {Object.entries(navItems).map(([label, path]) => (
            <li key={label}>
              <a href={path} className="hover:text-orange-400">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
         
          <button
            className="md:hidden dark:text-white text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full text-black dark:text-white bg-slate-100 dark:bg-black bg-opacity-90 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col items-center justify-center space-y-6 h-full text-lg">
          {Object.entries(navItems).map(([label, path]) => (
            <a
              key={label}
              href={path}
              className="hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
