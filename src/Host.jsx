import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './assets/logo/assets';

export default function Host() {
  const [roomCode, setRoomCode] = useState('');
  const [questions, setQuestions] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [clashEnded, setClashEnded] = useState(false);

  useEffect(() => {
    let interval;
    if (submitted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (submitted && timeLeft === 0) {
      setClashEnded(true);
    }
    return () => clearInterval(interval);
  }, [submitted, timeLeft]);

  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
  };

  const handleInputChange = (index, value) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  const handleSubmit = () => {
    if (questions.every(q => q.trim() !== '') && timer.trim() !== '') {
      const timeInSeconds = parseInt(timer) * 60;
      setTimeLeft(timeInSeconds);
      setSubmitted(true);
    } else {
      alert('Please fill all fields (question URLs + timer)');
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.background})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Navbar */}
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

        {/* Host Clash Section */}
        <div className="hover:cursor-default space-y-3.5 w-screen flex flex-col justify-center items-center mt-12">
          <h1 className="text-4xl font-bold mb-4">🎙️ Host a Clash</h1>
          <p className="text-lg mb-6 text-white">Host coding battles, invite friends, and track scores in real-time!</p>

          <div className="w-[calc(100%-50rem)] min-h-[22rem] text-white flex flex-col space-y-4 items-center bg-gray-800 rounded-lg shadow-[rgb(38,57,77)_0px_20px_30px_-10px] p-8">
            {!roomCode && (
              <>
                <p className="text-lg text-white">Click the button below to create a new clash:</p>
                <button
                  onClick={generateRoomCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                >
                  Create Clash
                </button>
              </>
            )}

            {roomCode && !submitted && (
              <>
                <p className="text-xl">Room Code: <span className="font-mono">{roomCode}</span></p>

                <input
                  type="number"
                  placeholder="Set Timer (minutes)"
                  value={timer}
                  onChange={(e) => setTimer(e.target.value)}
                  className="w-full px-4 py-2 text-black rounded-md"
                />

                <div className="w-full space-y-3">
                  {questions.map((q, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={`Enter LeetCode URL ${idx + 1}`}
                      value={q}
                      onChange={(e) => handleInputChange(idx, e.target.value)}
                      className="w-full px-4 py-2 text-black rounded-md"
                    />
                  ))}
                  <button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg mt-2"
                  >
                    Submit Clash
                  </button>
                </div>
              </>
            )}

            {submitted && !clashEnded && (
              <>
                <p className="text-xl font-semibold">Room Code: <span className="font-mono">{roomCode}</span></p>
                <p className="text-lg font-medium">🕒 Time Remaining: <span className="font-bold">{formatTime(timeLeft)}</span></p>

                <div className="w-full space-y-2">
                  <p className="text-lg font-semibold">Selected Question URLs:</p>
                  <ul className="list-disc pl-6">
                    {questions.map((q, idx) => (
                      <li key={idx}>
                        Question {idx + 1}:{' '}
                        <a href={q} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                          {q}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {clashEnded && (
              <div className="text-red-400 text-2xl font-bold">⏱️ Clash has ended</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
