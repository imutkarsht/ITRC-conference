import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = {
  home: '/',
  'special session': '#special-session',
  committees: '#committees',
  speakers: '#speakers',
  submissions: '#submissions',
  venue: '#venue',
  schedule: '#schedule',
  registration: '#registration',
  'tech-genesis': '#call-for-paper',
  'contact us': '#contact',
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-black bg-opacity-80 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between">
        <div className='flex gap-4 items-center justify-center'>
            <img src="./mmmutlogo.png" alt="MMMUT ITRC" className="h-10" />
            <h1 className='text-2xl font-semibold'>MMMUT ITRC</h1>
        </div>
        <ul className="hidden md:flex space-x-4 text-lg">
          {Object.entries(navItems).map(([label, path]) => (
            <li key={label}>
              <a href={path} className="hover:text-orange-400">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
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
