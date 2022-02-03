import React from 'react';
import { ReactComponent as IntroMessage } from '../../assets/icons/test.svg';
import { ReactComponent as IntroPageSitting } from '../../assets/imgs/IntroPage_sitting.svg';
import './style.scss'; 

function IntroPage() {
  return (
    <div className="intropage-wrapper">
      <IntroMessage className='intro-message'/>
      <IntroPageSitting className='intro-sitting'/>
    </div>
  );
}

export default IntroPage;
