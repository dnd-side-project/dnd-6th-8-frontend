import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IntroMessage } from '../../../assets/icons/IntroPage/SecondPage/secondpage-text.svg';
import { ReactComponent as IntroStanding } from '../../../assets/icons/IntroPage/SecondPage/Intro_secondPage_standing.svg';
import './style.scss';

type SecondPageProps = {
  sec: number;
  activeIndex: number;
};

function SecondPage({ sec, activeIndex }: SecondPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/surveyStart');
    }, sec);
  }, []);

  return (
    <div className="secondpage-wrapper">
      <IntroMessage className="intro-message" />
      <IntroStanding className="intro-standing" />
      <div className="circle-wrapper">
        <div className={activeIndex === 0 ? 'active-circle' : 'non-active-circle'} />
        <div className={activeIndex === 1 ? 'active-circle' : 'non-active-circle'} />
      </div>
    </div>
  );
}

export default SecondPage;
