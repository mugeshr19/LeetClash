import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from './assets/logo/assets';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary login simulation
    if (email && password) {
      console.log('Logged in as:', email);
      navigate('/');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.background})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-xl text-white space-y-6">
        <div className="flex justify-center">
          <img src={assets.logo} alt="Leetclash Logo" className="w-16 h-16 rounded-lg" />
        </div>
        <h2 className="text-3xl font-bold text-center">Login to Leetclash</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-semibold transition hover:bg-gray-300"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Don’t have an account? <span className="text-indigo-400 cursor-pointer hover:underline">Sign up</span>
        </div>
      </div>
    </div>
  );
}
