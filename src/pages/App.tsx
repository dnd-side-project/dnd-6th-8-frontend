import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStart from './SurveyStart/SurveyStart';
import Survey from './Survey/Survey';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/surveyStart" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
