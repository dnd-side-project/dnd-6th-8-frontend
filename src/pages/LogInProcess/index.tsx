import React, {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import { ReactComponent as Tracious } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';

type params = {
  accessToken: string;
  signupCheck: string;
};

function LogInProcess() {
  const { accessToken, signupCheck } = useParams<params>();
  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      if (signupCheck === '0') {
        window.location.replace('/home');
      } else {
        window.location.replace('/signup');
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
