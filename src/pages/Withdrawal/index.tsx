import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Text } from '../../assets/icons/Withdrawal/cry.svg';
import './style.scss';

function Withdrawal() {
  const navigate = useNavigate();
  const expire = () => {
    navigate('/');
  };
  const gotoHome = () => {
    navigate('/home');
  };
  return (
    <div className="withdrawal-wrapper">
      <Text className="text" />
      <img className="background" src="imgs/Withdrawal/withdrawal-back.png" alt="background" />
      <div className="btn-wrapper">
        <button type="button" className="btn-gray" onClick={expire}>
          탈퇴하기
        </button>
        <button type="button" className="btn-blue" onClick={gotoHome}>
          계속 사용하기
        </button>
      </div>
    </div>
  );
}

export default Withdrawal;
