import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import Report from '../../../assets/icons/WallPaper/Hamburger/ic_singo.png';
import KakaoShare from '../../../assets/icons/WallPaper/Hamburger/ic_kakao_share.png';
import Update from '../../../assets/icons/WallPaper/Hamburger/ic_update.png';
import Delete from '../../../assets/icons/WallPaper/Hamburger/ic_delete.png';
import { RootState } from '../../../modules';

type HamburgerMenuProps = {
  onHamburgerMenuClick: () => void;
};

function HamburgerMenu({ onHamburgerMenuClick }: HamburgerMenuProps) {
  const navigate = useNavigate();
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  const dayFeed = useSelector((state: RootState) => state.dayFeed.data);
  const userInformation = useSelector((state: RootState) => state.userInformation.data);
  const goReportPage = () => {
    navigate(`/report/${readWallPaperData.id}`);
  };
  return (
    <div
      className="hamburgermenu-wrapper"
      role="button"
      tabIndex={0}
      onClick={onHamburgerMenuClick}
      onKeyDown={onHamburgerMenuClick}
    >
      {dayFeed?.writer === userInformation?.userEmail ? (
        <div className="hamburger-modal">
          <p>
            <img src={Update} alt="수정" />
            수정하기
          </p>
          <p>
            <img src={Delete} alt="삭제" />
            삭제하기
          </p>
        </div>
      ) : (
        <div className="hamburger-modal">
          <p>
            <img src={KakaoShare} alt="카톡공유" />
            카카오톡으로 공유하기
          </p>
          <p onClick={goReportPage} aria-hidden>
            <img src={Report} alt="신고" />
            신고하기
          </p>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
