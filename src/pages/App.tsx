import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStart from './SurveyStart/SurveyStart';
import Survey from './Survey/Survey';
import WelcomePage from './WelcomePage';
import IntroPage from './IntroPage';
import ArchivingPage from './ArchivingPage';
import Home from './Home/Home';
import WallPaper from './WallPaper';
import MyPage from './MyPage/MyPage';
import ScrollToTop from '../constants/ScrollToTop';
import UserProfile from './UserProfile';
import TermsConditions from './TermsConditions';
import PersonalInfoPolicy from './PersonalInfoPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/archiving" element={<ArchivingPage />} />
        <Route path="/surveyStart" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wallpaper/:id" element={<WallPaper />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/personalInfoPolicy" element={<PersonalInfoPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
