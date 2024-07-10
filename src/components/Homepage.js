import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/proxy/aGciI_s7iqlXn7tRO95KWE562ywNBOT6171ppEfmXlFJAA9u30fOAe75JG9qNczbkWUxJuoFmoV5dMltW-qwkFno')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-around min-h-screen text-white">
        <Navbar />
        <Body />
      </div>
    </div>
  );
};

export default Homepage;
