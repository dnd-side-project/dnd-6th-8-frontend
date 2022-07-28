/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useParams } from 'react-router-dom';
import Arrow from '../../../assets/icons/WallPaper/chevron_duo_left.png';
import defaultImg from '../../../assets/icons/WallPaper/defaultImg.png';
import { RootState } from '../../../modules';
import { readDayFeed } from '../../../modules/post/dayfeed';

function WallPaperPreview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  return (
    <div className="wallpaperpreview-wrapper">
      <img
        className="wallpaperpreview-background"
        src={readWallPaperData.coverImage === null ? defaultImg : readWallPaperData.coverPicture}
        alt="Background-img"
      />
      <div className="wallpaperpreview-main">
        <div className="arrow-wrapper">
          <img className="arrow" src={Arrow} alt="arrow" />
          <p>
            스와이프해서 <br /> 내용을 읽어보세요.
          </p>
        </div>
        <div className="line-top">
          <span>🍊</span> <span>{readWallPaperData && readWallPaperData.places}</span>
          <p>{readWallPaperData && readWallPaperData.title}</p>
        </div>
        <div className="line" />
        <div className="line-bottom">
          <p>
            {/* <img src={} alt="" /> */}
            {readWallPaperData && readWallPaperData.travelDuration}일 간의 여정
          </p>
          <div className="info-box">
            <p>{readWallPaperData && readWallPaperData.archivingStyle} 위주</p>
            <p>{readWallPaperData.haveCompanion ? <p>동료와</p> : <p>혼자</p>}</p>
            <p>{readWallPaperData && readWallPaperData.budget} 준비</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WallPaperPreview;
