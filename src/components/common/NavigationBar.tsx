import React, { useState } from 'react';
import './NavigationBar.scss';

function NavigationBar() {
  const [navigation, setNavigation] = useState<string | null>('home');

  const onChangeNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setNavigation(e.currentTarget.children[0].getAttribute('alt'));
  };

  return (
    <div className="navigation-wrapper">
      <button type="button" className={navigation === 'home' ? ' click' : ''} onClick={onChangeNavigation}>
        <img src={`imgs/common/ic_home_navigation${navigation === 'home' ? '_click' : ''}.png`} alt="home" />홈
      </button>
      <button type="button" className={navigation === 'archiving' ? 'click' : ''} onClick={onChangeNavigation}>
        <img
          src={`imgs/common/ic_archiving_navigation${navigation === 'archiving' ? '_click' : ''}.png`}
          alt="archiving"
        />
        기록하기
      </button>
      <button type="button" className={navigation === 'mypage' ? 'click' : ''} onClick={onChangeNavigation}>
        <img src={`imgs/common/ic_mypage_navigation${navigation === 'mypage' ? '_click' : ''}.png`} alt="mypage" />
        마이페이지
      </button>
    </div>
  );
}

export default NavigationBar;
