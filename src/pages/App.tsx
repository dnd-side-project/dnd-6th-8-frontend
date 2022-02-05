import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';
import ArchivingPage from './ArchivingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/intro' element={<IntroPage />} />
        <Route path='/archiving' element={<ArchivingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
