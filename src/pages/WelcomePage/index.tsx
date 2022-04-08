import React, { useCallback} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import axios from 'axios';
import instance from '../../lib/axios';
import { ReactComponent as TextLogo } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';
import { ReactComponent as TalkBox } from '../../assets/icons/WelcomePage/talk_box.svg';
import { ReactComponent as Kakao } from '../../assets/icons/WelcomePage/ic_login_kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/WelcomePage/ic_login_naver.svg';
import { ReactComponent as Google } from '../../assets/icons/WelcomePage/ic_login_google.svg';

function WelcomePage() {

  const KakaoLogIn = useCallback(async () => {
    const kakaoSignIn = async () => {
      const kakao: string = await instance.get('/auth/kakao', {
        params: {
          loginType: 'kakao',
        },
      });
      window.location.replace(kakao);
    };
    kakaoSignIn();
  }, []);

  const NaverLogIn = useCallback(async () => {
    const naverSignIn = async () => {
      const naver = await axios.get('http://3.37.253.113:8080/auth/naver', {
        params: {
          loginType: 'naver',
        },
      });
      console.log(naver);
      // window.location.replace(naver.data);
    };
    naverSignIn();
  }, []);

  const GoogleLogIn = useCallback(async () => {
    const googleSignIn = async () => {
      const google = await axios.get('/auth/google', {
        params: {
          loginType: 'google',
        },
      });
      console.log(google);
    };
    googleSignIn();
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
          <Kakao onClick={KakaoLogIn} />
          <Naver onClick={NaverLogIn} />
          <Google onClick={GoogleLogIn} />
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
