import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { ReactComponent as Tracious } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';

type params = {
  accessToken: string;
  signupCheck: string;
  nickName: string;
};

function LogInProcess() {
  const { accessToken, signupCheck, nickName } = useParams<params>();
  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
      if (signupCheck === '1') {
        window.location.replace('/home');
      } else {
        window.location.replace('/intro');
      }
    }
  }, []);
  return (
    <div className="loginprocess-wrapper">
      <Tracious className="loginprocess-logo" />
    </div>
  );
}

export default LogInProcess;
