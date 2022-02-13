import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStart from './SurveyStart/SurveyStart';
import Survey from './Survey/Survey';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';
import ArchivingPage from './ArchivingPage';
import Home from './Home/Home';
import MyPage from './MyPage/MyPage';
import UploadWallPaper from './UploadWallPaper/UploadWallPaper';
import UploadDay from './UploadDay/UploadDay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/archiving" element={<ArchivingPage />} />
        <Route path="/surveyStart" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/upload-wallpaper" element={<UploadWallPaper />} />
        <Route path="/upload-day" element={<UploadDay />} />
      </Routes>
    </Router>
  );
}

export default App;
