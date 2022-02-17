import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { ReactComponent as TextLogo } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';
import { ReactComponent as TalkBox } from '../../assets/icons/WelcomePage/talk_box.svg';
import { ReactComponent as Kakao } from '../../assets/icons/WelcomePage/ic_login_kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/WelcomePage/ic_login_naver.svg';
import { ReactComponent as Google } from '../../assets/icons/WelcomePage/ic_login_google.svg';

function WelcomePage() {
  const navigate = useNavigate(); 

  const gotoTermsConditions = () => {
    navigate('/termsConditions'); 
  }
  const gotoPersonalInfoPolicy = () => {
    navigate('/personalInfoPolicy'); 
  }
  return (
    <div className="welcomepage-wrapper">
      <TextLogo className="text-logo" />
      <div className="intro">
        트레셔스와 함께
        <br /> 여행의 설렘을 간직하세요!
      </div>
      <div className="frame">
        <TalkBox className="talk-box" />
        <div className="social-wrap">
          <Link to="/intro">
            <Kakao />
          </Link>
          <Link to="/intro">
            <Naver />
          </Link>
          <Link to="/intro">
            <Google />
          </Link>
        </div>
      </div>
      <p>가입시 트레셔스의 이용약관에 동의하는 것으로 간주합니다.</p>
      <div className="see-long-term-wrapper">
        <p className="see-long-term" onClick={gotoTermsConditions} aria-hidden='true'>이용약관 보기</p>
        <p className="see-long-term" onClick={gotoPersonalInfoPolicy} aria-hidden='true'>개인정보처리방침 보기</p>
      </div>
    </div>
  );
}

export default WelcomePage;
