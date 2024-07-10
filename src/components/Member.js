import React from 'react';
// Member component
const Member = ({ name, position, place, committee, imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto border-2 border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden w-80 relative m-4">
      <div className="relative w-full h-48">
        <img 
          alt="member-Image" 
          className="w-full h-full object-cover" 
          src={imageSrc} 
        />
        <div className="absolute top-0 left-0 bg-slate-900 text-white text-xs font-bold py-1 px-2 rounded">
          {committee}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 py-4 bg-slate-800 px-6 w-full">
        <h3 className="text-xl font-semibold text-gray-200">{name}</h3>
        <p className="text-sm text-gray-300">{position}</p>
        <p className="text-sm text-gray-300">{place}</p>
      </div>
    </div>
  );
};

export default Member;
