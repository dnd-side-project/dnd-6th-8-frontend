import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { ReactComponent as Tracious } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';

type params = {
  accessToken: string;
  refreshToken: string;
};

function LogInProcess() {
  const { accessToken, refreshToken } = useParams<params>();
  const [signupCheck, setSignupCheck] = useState(true);
  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
      if (signupCheck) {
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
