import React, { useEffect, useState } from 'react';
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
import Scrap from './Scrap/Scrap';
import UploadHeader from '../components/common/UploadHeader';
import LogInProcess from './LogInProcess';
import SignUpPage from './SignUpPage';
import Withdrawal from './Withdrawal';
import ReportPage from './ReportPage';
import ProtectedRoutes from './ProtectRoutes';

function App() {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'));

  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      setTimeout(() => {
        localStorage.removeItem('accessToken');
        setAccessToken('');
        window.location.replace('/');
      }, 10800000);
    }
  }, [accessToken]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/callback/:accessToken/:signupCheck/:nickName" element={<LogInProcess />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/archiving" element={<ArchivingPage />} />
        <Route path="/surveyStart" element={<SurveyStart />} />
        <Route path="/survey" element={<Survey />} />
        <Route element={<ProtectedRoutes />}>
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
          <Route
            path="/mypage"
            element={
              <>
                <Header />
                <MyPage />
                <NavigationBar />
              </>
            }
          />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/personalInfoPolicy" element={<PersonalInfoPolicy />} />
          <Route
            path="/upload-wallpaper"
            element={
              <>
                <UploadHeader isCanGoBack={false} title="표지작성" />
                <UploadWallPaper />
              </>
            }
          />
          <Route
            path="/upload-day"
            element={
              <>
                <UploadHeader isCanGoBack title="기록작성" />
                <UploadDay />
              </>
            }
          />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/report/:id" element={<ReportPage />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
