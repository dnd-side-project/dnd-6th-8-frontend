import React from 'react';
import './style.scss';
import Report from '../../../assets/icons/WallPaper/Hamburger/ic_singo.png';
import KakaoShare from '../../../assets/icons/WallPaper/Hamburger/ic_kakao_share.png';
import Update from '../../../assets/icons/WallPaper/Hamburger/ic_update.png';
import Delete from '../../../assets/icons/WallPaper/Hamburger/ic_delete.png'; 

type HamburgerMenuProps = {
  me: boolean;
  onHamburgerMenuClick: () => void;
};

function HamburgerMenu({ me, onHamburgerMenuClick }: HamburgerMenuProps) {
  return (
    <div className="hamburgermenu-wrapper" role="button" tabIndex={0} onClick={onHamburgerMenuClick} onKeyDown={onHamburgerMenuClick}>
      {
          me 
          ? ( <div className="hamburger-modal">
          <p>
            <img src={Update} alt="수정" />
            수정하기
          </p>
          <p>
            <img src={Delete} alt="삭제" />
            삭제하기
          </p>
        </div>)
          : ( <div className="hamburger-modal">
          <p>
            <img src={KakaoShare} alt="카톡공유" />
            카카오톡으로 공유하기
          </p>
          <p>
            <img src={Report} alt="신고" />
            신고하기
          </p>
        </div>)
      }
     
    </div>
  );
}

export default HamburgerMenu;
