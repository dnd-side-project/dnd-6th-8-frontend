import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { ReactComponent as Tracious } from '../../assets/icons/WelcomePage/tracious_text_logo.svg';
import { userInfo } from '../../modules/user/userinfo';
import { RootState } from '../../modules';

type params = {
  accessToken: string;
  signupCheck: string;
  nickName: string;
};

function LogInProcess() {
  const { userName } = useSelector((state: RootState) => state.userInfoReducer.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accessToken, signupCheck, nickName } = useParams<params>();

  const gotoHome = useCallback(()=>{
    if(userName !== ''){
      if (signupCheck) {
        navigate('/home');
      } else {
        navigate('/survey');
      }
    }
  },[userName]);

  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
      console.log(userName); 
      dispatch(userInfo()); 
      console.log(userName);
    }
  }, []);

  return (
    <div className="loginprocess-wrapper">
      <Tracious className="loginprocess-logo" />
    </div>
  );
}

export default LogInProcess;
