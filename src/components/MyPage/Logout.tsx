import React from 'react';
import './Logout.scss';

type LogoutProps = {
  logOutHandler: () => void;
};

function Logout({ logOutHandler }: LogoutProps) {
  return (
    <div className="logout-wrapper">
      <div className="logout-alert">
        <div className="main-text">로그아웃 하시겠어요?</div>
        <div className="box-btn">
          <div className="btn-left">
            <span>취소</span>
          </div>
          <div role="button" tabIndex={0} className="btn-right" onClick={logOutHandler} onKeyDown={logOutHandler}>
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
