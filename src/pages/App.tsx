import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStart from './SurveyStart/SurveyStart';
import Survey from './Survey/Survey';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/surveyStart" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
