import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../modules/user/userinfomation';
import './style.scss';
import { ReactComponent as Tracious } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';

type params = {
  accessToken: string;
  signupCheck: string;
  nickName: string;
};

function LogInProcess() {
  const navigate = useNavigate();
  const { accessToken, signupCheck, nickName } = useParams<params>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
      dispatch(userInfo());
      if (signupCheck) {
        navigate('/home');
      } else {
        navigate('/intro');
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
