import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.scss';

function Menu() {
  const navigate = useNavigate();

  const gotoTermsConditions = () => {
    navigate('/termsConditions');
  };
  const gotoPersonalInfoPolicy = () => {
    navigate('/personalInfoPolicy');
  };

  return (
    <div className="menu-wrapper">
      <div className="menu" onClick={gotoTermsConditions} aria-hidden="true">
        <img src="imgs/MyPage/ic_terms.png" alt="이용약관" />
        <span>이용약관 보기</span>
      </div>
      <div className="menu" onClick={gotoPersonalInfoPolicy} aria-hidden="true">
        <img src="imgs/MyPage/ic_Personal_information.png" alt="개인정보 처리방침" />
        <span>개인정보 처리방침</span>
      </div>
      <div className="menu">
        <img src="imgs/MyPage/ic_loginout.png" alt="로그아웃" />
        <span>로그아웃</span>
      </div>
    </div>
  );
}

export default Menu;
