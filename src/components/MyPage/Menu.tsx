import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.scss';

type MenuProps = {
  logOutHandler: () => void;
};

function Menu({ logOutHandler }: MenuProps) {
  const navigate = useNavigate();

  const gotoTermsConditions = () => {
    navigate('/termsConditions');
  };
  const gotoPersonalInfoPolicy = () => {
    navigate('/personalInfoPolicy');
  };

  return (
    <div className="menu-wrapper">
      <div className="menu" role="button" tabIndex={0} onClick={gotoTermsConditions} onKeyDown={gotoTermsConditions}>
        <img src="imgs/MyPage/ic_terms.png" alt="terms" />
        <span>이용약관 보기</span>
      </div>
      <div
        className="menu"
        role="button"
        tabIndex={0}
        onClick={gotoPersonalInfoPolicy}
        onKeyDown={gotoPersonalInfoPolicy}
      >
        <img src="imgs/MyPage/ic_Personal_information.png" alt="personal information" />
        <span>개인정보 처리방침</span>
      </div>
      <div className="menu" role="button" tabIndex={0} onClick={logOutHandler} onKeyDown={logOutHandler}>
        <img src="imgs/MyPage/ic_loginout.png" alt="logout" />
        <span>로그아웃</span>
      </div>
    </div>
  );
}

export default Menu;
