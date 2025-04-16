import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './assets/logo/assets'; // Adjust if needed

export default function JoinClash() {
  const [roomNumber, setRoomNumber] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showLinks, setShowLinks] = useState(false);

  const problems = [
    "https://leetcode.com/problems/valid-parentheses/description/",
    "https://leetcode.com/problems/two-sum/description/",
    "https://leetcode.com/problems/reverse-integer/description/",
    "https://leetcode.com/problems/add-two-numbers/description/",
    "https://leetcode.com/problems/divide-two-integers/description/",
  ];

  useEffect(() => {
    let timer;
    if (hasJoined && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (hasJoined && timeLeft === 0) {
      setShowLinks(true);
    }
    return () => clearTimeout(timer);
  }, [hasJoined, timeLeft]);

  const handleJoin = () => {
    if (roomNumber.trim()) {
      setHasJoined(true);
    } else {
      alert('Please enter a room number.');
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${assets.background2})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <div className="w-full h-20 border-b-2 flex justify-between items-center px-7">
        <div className="flex items-center h-16">
          <img src={assets.logo} alt="Developer Logo" className="w-16 h-16 rounded-lg" />
        </div>
        <div className="w-1/3 h-10 flex justify-between">
          {['/', '/host', '/join-clash', '/skill-sheet'].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="transition transform hover:-translate-y-1 hover:shadow-md font-medium border-2 rounded-lg w-24 text-center flex items-center justify-center"
            >
              {['Home', 'Host', 'Join Clash', 'Skill Sheet'][i]}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">🎮 Play with friends and level up together!</h1>

        <div className="w-[calc(100%-50rem)] max-w-[600px] text-white flex flex-col space-y-6 items-center bg-gray-800 rounded-lg shadow-lg p-8">
          <p className="text-3xl font-semibold">🛡️ Join the Clash</p>

          {!hasJoined ? (
            <>
              <input
                type="text"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                placeholder="Enter Room Number"
                className="w-full px-4 py-2 rounded-lg text-black"
              />
              <button
                onClick={handleJoin}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
              >
                Join Room
              </button>
            </>
          ) : !showLinks ? (
            <div className="text-center">
              <p className="text-xl font-medium mb-2">⏳ Clash starting in...</p>
              <p className="text-4xl font-bold">{timeLeft}s</p>
            </div>
          ) : (
            <div className="text-left space-y-2">
              <p className="text-xl font-semibold mb-2">💻 Your Challenges:</p>
              <ul className="list-disc list-inside space-y-1">
                {problems.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      Problem {idx + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
