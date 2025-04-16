import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Host from './Host'; 
import JoinClash from './JoinClash'; 
import SkillSheet from './SkillSheet'; 
import Login from './Login'; // 🆕 Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/host" element={<Host />} />
        <Route path="/join-clash" element={<JoinClash />} />
        <Route path="/skill-sheet" element={<SkillSheet />} />
        <Route path="/login" element={<Login />} /> {/* 🆕 Add the Login route */}
      </Routes>
    </Router>
  );
}

export default App;
