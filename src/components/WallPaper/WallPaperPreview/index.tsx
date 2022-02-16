import React from 'react';
import './style.scss';
import Arrow from '../../../assets/icons/WallPaper/chevron_duo_left.png';
import Jeju from '../../../assets/icons/WallPaper/img_jeju01_wallpaper.png';
import { HomeFeedsType } from '../../../constants';

type WallPaperPreview = {
  fetchData: HomeFeedsType | undefined;
};

function WallPaperPreview({ fetchData }: WallPaperPreview) {
  return (
    <div className="wallpaperpreview-wrapper" >
      <img className="wallpaperpreview-background" src={Jeju} alt="Background-img" />
      {/* <img className="wallpaperpreview-background" src={fetchData && fetchData.image} alt="Background-img" /> */}
      <div className="wallpaperpreview-main">
        <div className="arrow-wrapper">
          <img className="arrow" src={Arrow} alt="arrow" />
          <p>
            스와이프해서 <br /> 내용을 읽어보세요.
          </p>
        </div>
        <div className="line-top">
          <span>🍊</span> <span>{fetchData && fetchData.locationKR}</span>
          <p>{fetchData && fetchData.title}</p>
        </div>
        <div className="line">{}</div>
        <div className="line-bottom">
          <p>{fetchData && fetchData.date}일 간의 여정</p>
          <div className="info-box">
            <p>{fetchData && fetchData.category} 위주</p>
            <p>혼자 여행</p>
            <p>넉넉하게 준비</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WallPaperPreview;
