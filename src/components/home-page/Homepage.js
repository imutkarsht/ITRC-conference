import React from 'react';
import Body from './Body';

const Homepage = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-slate-300 dark:bg-slate-900 bg-center" 
      id='home'
      style={{ backgroundImage: `url('./images/Computer.jpg')` }}
    >
      <div className="absolute inset-0 bg-slate-300 text-black dark:text-white dark:bg-black opacity-50 dark:opacity-80"></div>
      <div className="relative z-5 flex flex-col justify-around min-h-screen text-black dark:text-white">
        <Body />
      </div>
    </div>
  );
};

export default Homepage;
