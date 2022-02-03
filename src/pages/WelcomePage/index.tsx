import React from 'react';
import './style.scss';
import { ReactComponent as TextLogo} from '../../assets/icons/tracious_text_logo.svg'; 

function WelcomePage() {
  return (
    <div className="wrapper">
        <TextLogo className='text-logo'/>
    </div>
      
  );
}

export default WelcomePage;
