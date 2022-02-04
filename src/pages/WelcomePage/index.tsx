import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ReactComponent as TextLogo } from '../../assets/icons/tracious_text_logo.svg';
import { ReactComponent as TalkBox } from '../../assets/icons/talk_box.svg';
import { ReactComponent as Kakao } from '../../assets/icons/ic_login_kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/ic_login_naver.svg';
import { ReactComponent as Google } from '../../assets/icons/ic_login_google.svg';


function WelcomePage() {
  return (
    <div className="welcomepage-wrapper">
      <TextLogo className="text-logo" />
      <div className="intro">
        트레셔스와 함께
        <br /> 여행의 설렘을 간직하세요!
      </div>
      <div className="frame">
        <TalkBox className="talk-box" />
        <div className='social-wrap'>
          <Link to='/intro'><Kakao/></Link>
          <Link to='/intro'><Naver /></Link>
          <Link to='/intro'><Google /></Link>
        </div>
      </div>
    </div>
  );
}


export default WelcomePage;
