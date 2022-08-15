import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import Report from '../../../assets/icons/WallPaper/Hamburger/ic_singo.png';
import KakaoShare from '../../../assets/icons/WallPaper/Hamburger/ic_kakao_share.png';
import Update from '../../../assets/icons/WallPaper/Hamburger/ic_update.png';
import Delete from '../../../assets/icons/WallPaper/Hamburger/ic_delete.png';
import { RootState } from '../../../modules';
import kakaoShare from '../../../constants/share';
import instance from '../../../lib/axios';

type HamburgerMenuProps = {
  onHamburgerMenuClick: () => void;
  setDeleteClick: (click: boolean) => void;
  setDeleteId: (number: number) => void;
};

function HamburgerMenu({ onHamburgerMenuClick, setDeleteClick, setDeleteId }: HamburgerMenuProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  const dayFeed = useSelector((state: RootState) => state.dayFeed.data);
  const userInformation = useSelector((state: RootState) => state.userInformation.data);
  const goReportPage = () => {
    navigate(`/report/${readWallPaperData.id}`);
  };
  const onDeleteClick = async () => {
    setDeleteClick(true);
    setDeleteId(readWallPaperData.id);
    // await instance
    //   .delete(`/api/v1/archives/${readWallPaperData.id}`)
    //   .then((res) => {
    //     navigate(`/archiving`);
    //   })
    //   .catch((err) => console.log(err));
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
          <p onClick={onDeleteClick} aria-hidden>
            <img src={Delete} alt="삭제" />
            삭제하기
          </p>
        </div>
      ) : (
        <div className="hamburger-modal">
          <p onClick={() => kakaoShare()} aria-hidden>
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
