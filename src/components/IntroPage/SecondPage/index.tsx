import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IntroMessage } from '../../../assets/icons/IntroPage/SecondPage/secondpage-text.svg';
import { ReactComponent as IntroStanding } from '../../../assets/icons/IntroPage/SecondPage/Intro_secondPage_standing.svg';
import './style.scss';

function SecondPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/surveyStart'); 
    }, 3000);
  }, []);

  return (
    <div className="secondpage-wrapper">
      <IntroMessage className="intro-message" />
      <IntroStanding className="intro-standing" />
    </div>
  );
}

export default SecondPage;
