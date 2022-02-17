import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInfo.scss';

function UserInfo() {
  const navigate = useNavigate(); 
  const gotoUserProfile = () => {
    navigate('/userProfile'); 
  }
  return (
    <div className="userInfo-wrapper" onClick={gotoUserProfile} aria-hidden='true'>
      <div className="container">
        <img src="imgs/MyPage/illust_profile_mypage.png" alt="profile" className="profile" />
        <div className="name-container">
          <span className="name">이경서</span>
          <img src="imgs/MyPage/ic_arrow_right_mypage.png" alt="arrow" className="arrow" />
        </div>
        <div className="archiving">기록한 여행 아카이빙(6)</div>
      </div>
    </div>
  );
}

export default UserInfo;
