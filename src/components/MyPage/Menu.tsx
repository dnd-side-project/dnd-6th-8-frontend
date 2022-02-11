import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <img src="imgs/MyPage/ic_terms.png" alt="terms" />
        <span>이용약관 보기</span>
      </div>
      <div className="menu">
        <img src="imgs/MyPage/ic_Personal information.png" alt="personal information" />
        <span>개인정보 처리방침</span>
      </div>
      <div className="menu">
        <img src="imgs/MyPage/ic_loginout.png" alt="logout" />
        <span>로그아웃</span>
      </div>
    </div>
  );
}

export default Menu;
