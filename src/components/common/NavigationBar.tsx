import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.scss';

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeNavigation = (newNavigaton: string) => {
    navigate(`/${newNavigaton}`);
  };

  return (
    <div className="navigation-wrapper">
      <button
        type="button"
        className={location.pathname === '/home' ? ' click' : ''}
        onClick={() => onChangeNavigation('home')}
      >
        <img src={`imgs/common/ic_home_navigation${location.pathname === '/home' ? '_click' : ''}.png`} alt="home" />홈
      </button>
      <button
        type="button"
        className={location.pathname === '/archiving' ? 'click' : ''}
        onClick={() => onChangeNavigation('archiving')}
      >
        <img
          src={`imgs/common/ic_archiving_navigation${location.pathname === '/archiving' ? '_click' : ''}.png`}
          alt="archiving"
        />
        기록하기
      </button>
      <button
        type="button"
        className={location.pathname === '/mypage' ? 'click' : ''}
        onClick={() => onChangeNavigation('mypage')}
      >
        <img
          src={`imgs/common/ic_mypage_navigation${location.pathname === '/mypage' ? '_click' : ''}.png`}
          alt="mypage"
        />
        마이페이지
      </button>
    </div>
  );
}

export default NavigationBar;
