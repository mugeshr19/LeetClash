import React, { useState } from 'react';
import { assets } from './assets/logo/assets';

export default function Landing() {
 

  return (
    <div className="h-screen w-screen flex flex-col items-center" style={{ backgroundColor: '#6a6a6a' }}>
      <div className="w-full h-20 border-b-2 flex justify-between items-center px-7">
        <div className="flex items-center h-16">
          <img src={assets.logo} alt="Developer Logo" className="w-16 h-16 rounded-lg" />
        </div>
        <div className="w-80 h-10 flex justify-between">
          {['Home', 'Admin', 'Room', 'Streak'].map((label) => (
            <button
              key={label}
              className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-16"
            >
              {label}
            </button>
          ))}
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-gray-300">
          Login
        </button>
      </div>    
      
      </div>
      
  );
}
