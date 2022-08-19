import React from 'react';
import { ReactComponent as IntroMessage } from '../../../assets/icons/IntroPage/FirstPage/firstpage-text.svg';
import { ReactComponent as IntroPageSitting } from '../../../assets/icons/IntroPage/FirstPage/Intro_firstPage_sitting.svg';
import './style.scss';

type firstPage = {
  activeIndex: number;
};

function FirstPage({ activeIndex }: firstPage) {
  return (
    <div className="firstpage-wrapper">
      <IntroMessage className="intro-message" />
      <IntroPageSitting className="intro-sitting" />
      <div className="circle-wrapper">
        <div className={activeIndex === 0 ? 'active-circle' : 'non-active-circle'} />
        <div className={activeIndex === 1 ? 'active-circle' : 'non-active-circle'} />
      </div>
    </div>
  );
}

export default FirstPage;
