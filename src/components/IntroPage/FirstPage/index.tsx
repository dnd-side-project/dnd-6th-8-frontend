import React from 'react';
import { ReactComponent as IntroMessage } from '../../../assets/icons/firstpage-text.svg';
import { ReactComponent as IntroPageSitting } from '../../../assets/imgs/Intro_firstPage_sitting.svg';
import './style.scss';

function FirstPage() {
  return (
    <div className="firstpage-wrapper">
      <IntroMessage className="intro-message" />
      <IntroPageSitting className="intro-sitting" />
    </div>
  );
}

export default FirstPage;
