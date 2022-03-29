import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../lib/axios';
import './UserInfo.scss';

function UserInfo() {
  const navigate = useNavigate();
  const gotoUserProfile = () => {
    navigate('/userProfile');
  };
  useEffect(() => {
    const userInfo = async() => {
      await instance.get('/api/v1/user/info')
      .then((res) => console.log(res))
      .catch((e) => console.log('에러입니다', e));
    }
    userInfo(); 
  }, []);
  return (
    <div className="userInfo-wrapper" role="button" tabIndex={0} onClick={gotoUserProfile} onKeyDown={gotoUserProfile}>
      <div className="container">
        <img src="imgs/MyPage/illust_profile_mypage.png" alt="프로필 이미지" className="profile" />
        <div className="name-container">
          <span className="name">이경서</span>
          <img src="imgs/MyPage/ic_arrow_right_mypage.png" alt="오른쪽 화살표 아이콘" className="arrow" />
        </div>
        <div className="archiving">기록한 여행 아카이빙(6)</div>
      </div>
    </div>
  );
}

export default UserInfo;
