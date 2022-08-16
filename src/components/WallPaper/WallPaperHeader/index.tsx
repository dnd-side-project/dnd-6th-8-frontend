/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import BtnToggleOn from '../../../assets/icons/WallPaper/btn_toggle.png';
import BtnToggleOff from '../../../assets/icons/WallPaper/btn_toggle_off.png';
import XLogo from '../../../assets/icons/WallPaper/ic_x.png';
import Hamburger from '../../../assets/icons/WallPaper/ic_hamburger.png';
import Scrap from '../../../assets/icons/WallPaper/ic_scrap.png';
import ClickScrap from '../../../assets/icons/WallPaper/Hamburger/ic_scrap_navigation 1.png';
import HamburgerMenu from '../HamburgerMenu';
import { RootState } from '../../../modules';
import instance from '../../../lib/axios';
import { readWallPaper } from '../../../modules/post/readwallpaper';

type WallPaperHeaderProps = {
  setDeleteClick: (click: boolean) => void;
  setDeleteId: (number: number) => void;
};

function WallPaperHeader({ setDeleteClick, setDeleteId }: WallPaperHeaderProps) {
  const dispatch = useDispatch();
  const dayFeed = useSelector((state: RootState) => state.dayFeed.data);
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  const userInformation = useSelector((state: RootState) => state.userInformation.data);
  const [scrapToggle, setScrapToggle] = useState<any>();
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSharedToggleClick = async () => {
    if (readWallPaperData.share) {
      await instance
        .put(`/api/v1/archives/${readWallPaperData.id}/share?isShare=false`)
        .then((res) => {
          dispatch(readWallPaper(readWallPaperData.id));
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      await instance
        .put(`/api/v1/archives/${readWallPaperData.id}/share?isShare=true`)
        .then((res) => {
          dispatch(readWallPaper(readWallPaperData.id));
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const onScrapToggle = async () => {
    if (scrapToggle) {
      // true, 스크랩 DELETE
      await instance
        .delete(`/api/v1/archives/${readWallPaperData.id}/unScraps`)
        .then(async () => {
          await instance
            .get(`/api/v1/archives/${readWallPaperData.id}/scrap`)
            .then((res) => setScrapToggle(res))
            .catch((err) => {
              // alert(err);
            });
        })
        .catch((err) => {
          // alert(err);
        });
    } else {
      // false, 스크랩 POST
      await instance
        .post(`/api/v1/archives/${readWallPaperData.id}/scraps`)
        .then(async () => {
          await instance
            .get(`/api/v1/archives/${readWallPaperData.id}/scrap`)
            .then((res) => setScrapToggle(res))
            .catch((err) => {
              // alert(err);
            });
        })
        .catch((err) => {
          // alert(err);
        });
    }
  };
  const onHamburgerMenuClick = (): void => setHamburgerMenu((prev) => !prev);

  useEffect(() => {
    const getScrap = async () => {
      await instance
        .get(`/api/v1/archives/${readWallPaperData.id}/scrap`)
        .then((res) => setScrapToggle(res))
        .catch((err) => {
          alert(err);
        });
    };
    if (dayFeed?.writer !== userInformation?.userEmail && readWallPaperData.id !== null) {
      getScrap();
    }
  }, [readWallPaperData.id, dayFeed, userInformation]);

  return (
    <div className="wallpaperheader-wrapper">
      {hamburgerMenu && (
        <HamburgerMenu
          onHamburgerMenuClick={onHamburgerMenuClick}
          setDeleteClick={setDeleteClick}
          setDeleteId={setDeleteId}
        />
      )}
      <div className="header-left">
        <img className="x-logo" src={XLogo} alt="X" onClick={goBack} aria-hidden="true" />
      </div>
      <div className="header-right">
        {dayFeed?.writer === userInformation?.userEmail ? (
          readWallPaperData.share ? (
            <>
              <p className="shared-text">공유 ON</p>
              <img
                className="shared-logo"
                src={BtnToggleOn}
                alt="sharedOn"
                onClick={onSharedToggleClick}
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              <p className="not-shared-text">공유 OFF</p>
              <img
                className="not-shared-logo"
                src={BtnToggleOff}
                alt="sharedOff"
                onClick={onSharedToggleClick}
                aria-hidden="true"
              />
            </>
          )
        ) : scrapToggle ? (
          <img className="scrap-logo" src={ClickScrap} alt="scrap" onClick={onScrapToggle} aria-hidden="true" />
        ) : (
          <img className="scrap-logo" src={Scrap} alt="scrap" onClick={onScrapToggle} aria-hidden="true" />
        )}
        <img
          className="hamburger-logo"
          src={Hamburger}
          alt="hamburger"
          onClick={onHamburgerMenuClick}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default WallPaperHeader;
