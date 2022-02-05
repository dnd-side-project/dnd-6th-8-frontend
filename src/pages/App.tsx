import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path='/intro' element={<IntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
