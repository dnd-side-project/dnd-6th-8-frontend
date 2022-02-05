import React from 'react';
import { ReactComponent as IntroMessage } from '../../../assets/icons/IntroPage/FirstPage/firstpage-text.svg';
import { ReactComponent as IntroPageSitting } from '../../../assets/icons/IntroPage/FirstPage/Intro_firstPage_sitting.svg';
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
