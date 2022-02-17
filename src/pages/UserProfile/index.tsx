import React from 'react';
import UserProfileHeader from '../../components/UserProfile/UserProfileHeader';
import './style.scss';

function UserProfile() {
  return (
    <div className="userProfile-wrapper">
      <UserProfileHeader />
      <div className="userProfile-inner-wrapper">
        <div className="user-info">
          <div className="user-info-header">
            <p className="info">회원 정보</p>
            <p className="withdrawal">탈퇴하기</p>
          </div>
          <div className="user-info-main">
            <div className="name-area">
              <div className="name">이름</div>
              <div className="real-name">이경서</div>
            </div>
            <div className="email-area">
              <div className="email">가입된 이메일</div>
              <div className="real-email">1209lks@naver.com</div>
            </div>
          </div>
        </div>
        <div className="survey-info">
          <div className="user-info-header">
            <p className="info">서베이 정보</p>
          </div>
          <div className="survey-info-main">
            <p>어떤 여행을 즐기시는 편인가요?</p>
            <div className='label-wrapper'>
                <div>혼자여행</div>
                <div>동행과의 여행</div>
            </div>
            <p>여행을 준비할 때, 예산은 어떻게 계획하시나요?</p>
            <div className='label-wrapper'>
                <div>최소한으로 준비</div>
                <div>넉넉하게 준비</div>
            </div>
            <p>여행에 대한 기록을 볼 때, 어떤 글을 보고 싶으신가요?</p>
            <div className='label-wrapper'>
                <div>여행에 대한 실용적인 정보</div>
                <div className='long-sentence'>여행에서 느낀 감정 위주의 글</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
