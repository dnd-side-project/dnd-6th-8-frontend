/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

function WallPaperHeader() {
  const dayFeed = useSelector((state: RootState) => state.dayFeed.data);
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  const userInformation = useSelector((state: RootState) => state.userInformation.data);
  const [sharedToggle, setSharedToggle] = useState<boolean>(true);
  const [scrapToggle, setScrapToggle] = useState<any>();
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const goBackHome = () => {
    navigate('/home');
  };
  const onSharedToggleClick = (): void => setSharedToggle((prev) => !prev);
  const onScrapToggle = async (): Promise<any> => {
    if (scrapToggle) {
      // true, 스크랩 DELETE
      await instance
        .delete(`/api/v1/archives/${readWallPaperData.id}/unScraps`)
        .then(async () => {
          await instance
            .get(`/api/v1/archives/${readWallPaperData.id}/scrap`)
            .then((res) => setScrapToggle(res))
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
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
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
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
    getScrap();
  }, []);

  return (
    <div className="wallpaperheader-wrapper">
      {hamburgerMenu && <HamburgerMenu onHamburgerMenuClick={onHamburgerMenuClick} />}
      <div className="header-left">
        <img className="x-logo" src={XLogo} alt="X" onClick={goBackHome} aria-hidden="true" />
      </div>
      <div className="header-right">
        {dayFeed?.writer === userInformation?.userEmail ? (
          sharedToggle ? (
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
