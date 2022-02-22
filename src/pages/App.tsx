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
import UploadWallPaper from './UploadWallPaper/UploadWallPaper';
import UploadDay from './UploadDay/UploadDay';
import ScrollToTop from '../constants/ScrollToTop';
import UserProfile from './UserProfile';
import TermsConditions from './TermsConditions';
import PersonalInfoPolicy from './PersonalInfoPolicy';
import Header from '../components/common/Header';
import NavigationBar from '../components/common/NavigationBar';

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
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <NavigationBar />
            </>
          }
        />
        <Route path="/wallpaper/:id" element={<WallPaper />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/personalInfoPolicy" element={<PersonalInfoPolicy />} />
        <Route path="/upload-wallpaper" element={<UploadWallPaper />} />
        <Route path="/upload-day" element={<UploadDay />} />
      </Routes>
    </Router>
  );
}

export default App;
