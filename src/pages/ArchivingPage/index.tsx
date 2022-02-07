import React, { useEffect, useState } from 'react';
import ArchivingLoadingPage from '../../components/ArchivingPage/ArchivingLoadingPage';
import ArchivingCorePage from '../../components/ArchivingPage/ArchivingCorePage';
import Home from '../../assets/icons/ArchivingPage/NavigationBar/ic_home_navigation.png';
import Archiving from '../../assets/icons/ArchivingPage/NavigationBar/ic_archiving_navigation.png';
import MyPage from '../../assets/icons/ArchivingPage/NavigationBar/ic_mypage_navigation.png';
import './style.scss';
import Header from '../../components/common/Header';

function ArchivingPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div className="archivingpage-wrapper">
      <Header title="기록하기" />
      <div className="archivingpage-main-area">{loading ? <ArchivingLoadingPage /> : <ArchivingCorePage />}</div>
      <div className="archivingpage-navigation">
        <div className="nav-icon">
          <img src={Home} alt="Home" />
          <p>홈</p>
        </div>
        <div className="nav-icon">
          <img src={Archiving} alt="Archiving" />
          <p>기록하기</p>
        </div>
        <div className="nav-icon">
          <img src={MyPage} alt="MyPage" />
          <p>마이페이지</p>
        </div>
      </div>
    </div>
  );
}

export default ArchivingPage;