import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import GamePage from './pages/GamePage';
import ScorePage from './pages/ScorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/scores" element={<ScorePage />} />
    </Routes>
  );
}

export default App;
