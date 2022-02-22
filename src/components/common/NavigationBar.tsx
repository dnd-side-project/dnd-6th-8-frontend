import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';

function NavigationBar() {
  const [navigation, setNavigation] = useState<string>('home');
  const navigate = useNavigate();

  const onChangeNavigation = (newNavigaton: string) => {
    setNavigation(newNavigaton);
    navigate(`/${newNavigaton}`);
  };

  return (
    <div className="navigation-wrapper">
      <button
        type="button"
        className={navigation === 'home' ? ' click' : ''}
        onClick={() => onChangeNavigation('home')}
      >
        <img src={`imgs/common/ic_home_navigation${navigation === 'home' ? '_click' : ''}.png`} alt="home" />홈
      </button>
      <button
        type="button"
        className={navigation === 'archiving' ? 'click' : ''}
        onClick={() => onChangeNavigation('archiving')}
      >
        <img
          src={`imgs/common/ic_archiving_navigation${navigation === 'archiving' ? '_click' : ''}.png`}
          alt="archiving"
        />
        기록하기
      </button>
      <button
        type="button"
        className={navigation === 'mypage' ? 'click' : ''}
        onClick={() => onChangeNavigation('mypage')}
      >
        <img src={`imgs/common/ic_mypage_navigation${navigation === 'mypage' ? '_click' : ''}.png`} alt="mypage" />
        마이페이지
      </button>
    </div>
  );
}

export default NavigationBar;
