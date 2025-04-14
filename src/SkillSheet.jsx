import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from './assets/logo/assets';  
import './App.css';

export default function SkillSheet() {
    return (
    <div className="h-screen w-screen flex flex-col items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${assets.background2})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className="w-full h-20 border-b-2 flex justify-between items-center px-7">
          <div className="flex items-center h-16">
            <img src={assets.logo} alt="Developer Logo" className="w-16 h-16 rounded-lg" />
          </div>
          <div className="w-1/3 h-10 flex justify-between">
            <Link to="/" className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-24 text-center flex items-center justify-center">
            Home
            </Link>
            <Link to="/host" className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-24 text-center flex items-center justify-center">
            Host
            </Link>
            <Link to="/join-clash" className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-24 text-center flex items-center justify-center">
            Join Clash
            </Link>
            <Link to="/skill-sheet" className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-24 text-center flex items-center justify-center">
            Skill Sheet
            </Link>
          </div>
        </div> 
        <div className='hover:cursor-default space-y-0 w-screen h-screen flex flex-col justify-center items-center'>
              
              <h1 className="text-4xl font-bold mb-4">Skill Sheet</h1>
              <p className="text-lg mb-6">💻✨ Coding across platforms | 🎮⚔️ Leveling up daily</p>
          
          <div className="w-[calc(100%-50rem)] h-[calc(100%-15rem)] text-white   space-y-3.5 items-center bg-gray-800 rounded-lg shadow-[rgb(38,57,77)_0px_20px_30px_-10px] p-8 overflow-y-auto space-y-3.5 custom-scrollbar">

          <div className='w-full h-5/6 flex flex-col items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
            <div>
              <h1 className='text-4xl font-bold mb-4'>Leetcode</h1>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Rating : </h1>
              <h2 className='text-xl font-bold mb-4'>1384</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'> 
              <h1 className='text-2xl font-bold mb-4'>Contest Attended : </h1>
              <h2 className='text-xl font-bold mb-4'>31</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Number of problems solved : </h1>
              <h2 className='text-xl font-bold mb-4'>84</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Success Rate : </h1>
              <h2 className='text-xl font-bold mb-4'>89%</h2>
            </div>

          </div>
          <div className='w-full h-5/6 flex flex-col items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
          <div>
              <h1 className='text-4xl font-bold mb-4'>Codeforce</h1>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Rating : </h1>
              <h2 className='text-xl font-bold mb-4'>1384</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'> 
              <h1 className='text-2xl font-bold mb-4'>Contest Attended : </h1>
              <h2 className='text-xl font-bold mb-4'>31</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Number of problems solved : </h1>
              <h2 className='text-xl font-bold mb-4'>84</h2>
            </div>
            <div className='w-full h-14 flex items-center justify-between bg-gray-700 rounded-lg p-4 mb-4'>
              <h1 className='text-2xl font-bold mb-4'>Success Rate : </h1>
              <h2 className='text-xl font-bold mb-4'>89%</h2>
            </div>
          </div>


          

          </div>
        </div>   
    </div>
    );
}
  