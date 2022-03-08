import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.scss';

type LogoutProps = {
  logOutHandler: () => void;
};

function Logout({ logOutHandler }: LogoutProps) {
  const navigate = useNavigate(); 
  const LogOut = useCallback(()=>{
    localStorage.removeItem('accessToken');
    navigate('/'); 
  },[]);
  return (
    <div className="logout-wrapper">
      <div className="logout-alert">
        <div className="main-text">로그아웃 하시겠어요?</div>
        <div className="box-btn">
          <div className="btn-left">
            <span role="button" tabIndex={0} onClick={logOutHandler} onKeyDown={logOutHandler}>취소</span>
          </div>
          <div role="button" tabIndex={0} className="btn-right" onClick={LogOut} onKeyDown={LogOut}>
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
