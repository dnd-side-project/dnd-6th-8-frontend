import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import axios from 'axios';
import instance from '../../lib/axios';
import { ReactComponent as TextLogo } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';
import { ReactComponent as TalkBox } from '../../assets/icons/WelcomePage/talk_box.svg';
import { ReactComponent as Kakao } from '../../assets/icons/WelcomePage/ic_login_kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/WelcomePage/ic_login_naver.svg';

function WelcomePage() {
  const KakaoLogIn = useCallback(async () => {
    const kakaoSignIn = async () => {
      const kakao: string = await instance.get('/auth/kakao');
      window.location.replace(kakao);
    };
    kakaoSignIn();
  }, []);

  const NaverLogIn = useCallback(async () => {
    const naverSignIn = async () => {
      const naver: string = await instance.get('/auth/naver');
      window.location.replace(naver);
    };
    naverSignIn();
  }, []);

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
          <Kakao className="kakao" onClick={KakaoLogIn} />
          <Naver className="naver" onClick={NaverLogIn} />
        </div>
      </div>
      <p>가입시 트레셔스의 이용약관에 동의하는 것으로 간주합니다.</p>
      <div className="see-long-term-wrapper">
        <Link to="/termsConditions" style={{ textDecoration: 'none' }}>
          <p className="see-long-term">이용약관 보기</p>
        </Link>
        <Link to="/personalInfoPolicy" style={{ textDecoration: 'none' }}>
          <p className="see-long-term">개인정보처리방침 보기</p>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
