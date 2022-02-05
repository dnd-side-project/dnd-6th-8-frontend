import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStart from './SurveyStart/SurveyStart';
import Survey from './Survey/Survey';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
