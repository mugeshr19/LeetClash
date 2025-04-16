import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from './assets/logo/assets';

export default function Landing() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.background})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <div className="w-full h-20 border-b-2 flex justify-between items-center px-7">
        {/* Logo */}
        <div className="flex items-center h-16">
          <img src={assets.logo} alt="Developer Logo" className="w-16 h-16 rounded-lg" />
        </div>

        {/* Navigation Links */}
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

        {/* Login Button (Now a Link) */}
        <Link
          to="/login"
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-gray-300"
        >
          Login
        </Link>
      </div>

      {/* Main Content */}
      <div className="hover:cursor-default space-y-3.5 w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Leetclash</h1>
        <p className="text-lg mb-6">Join us for a fun and challenging coding experience!</p>

        {/* Scoreboard Box */}
        <div className="w-[calc(100%-50rem)] h-[calc(100%-10rem)] text-white flex flex-col space-y-3.5 items-center bg-gray-800 rounded-lg shadow-[rgb(38,57,77)_0px_20px_30px_-10px] p-8">
          <p className="text-4xl font-bold mb-4">📊 Scoreboard</p>
          <div className="w-[calc(100%-3rem)] h-[calc(100%-90rem)] flex flex-row items-center bg-gray-700 justify-between rounded-lg shadow-lg p-8">
            <p className="text-xl font-bold">S.no</p>
            <p className="text-xl font-bold">Username</p>
            <p className="text-xl font-bold">Score</p>
          </div>
        </div>
      </div>

      {/* Note */}
      <p className="hover:text-gray-600 hover:cursor-default">
        ℹ️ Participate in at least one challenge to view the scoreboard.
      </p>
    </div>
  );
}
