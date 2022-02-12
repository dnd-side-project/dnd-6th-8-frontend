/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import BtnToggleOn from '../../../assets/icons/WallPaper/btn_toggle.png';
import BtnToggleOff from '../../../assets/icons/WallPaper/btn_toggle_off.png';
import XLogo from '../../../assets/icons/WallPaper/ic_x.png';
import Hamburger from '../../../assets/icons/WallPaper/ic_hamburger.png';
import Scrap from '../../../assets/icons/WallPaper/ic_scrap.png';

function WallPaperHeader() {
  const [me, setMe] = useState<boolean>(true);
  const [sharedToggle, setSharedToggle] = useState<boolean>(true);
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const goBackHome = () => {
    navigate('/home');
  };
  const onSharedToggleClick = (): void => setSharedToggle((prev) => !prev);
  const onHamburgerMenuClick = (): void => setHamburgerMenu((prev) => !prev);

  return (
    <div className="wallpaperheader-wrapper">
      <div className="header-left">
        <img className="x-logo" src={XLogo} alt="X" onClick={goBackHome} aria-hidden="true" />
      </div>
      <div className="header-right">
        {me ? (
          sharedToggle ? (
            <>
              <p className='shared-text'>공유 ON</p>
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
              <p className='not-shared-text'>공유 OFF</p>
              <img
                className="not-shared-logo"
                src={BtnToggleOff}
                alt="sharedOff"
                onClick={onSharedToggleClick}
                aria-hidden="true"
              />
            </>
          )
        ) : (
          <img className="scrap-logo" src={Scrap} alt="scrap" />
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
