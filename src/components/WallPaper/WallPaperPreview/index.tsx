/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import Arrow from '../../../assets/icons/WallPaper/chevron_duo_left.png';
import { RootState } from '../../../modules';
import Emotion from '../../../assets/icons/TravelTaste/감성위주.png';
import ManyMoney from '../../../assets/icons/TravelTaste/넉넉하게준비.png';
import Withfriend from '../../../assets/icons/TravelTaste/동행과함께.png';
import Information from '../../../assets/icons/TravelTaste/정보위주.png';
import LittleMoney from '../../../assets/icons/TravelTaste/최소한으로준비.png';
import Alone from '../../../assets/icons/TravelTaste/혼자여행.png';
import { emojiSelector } from '../../../constants/emojiSelector';

function WallPaperPreview() {
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  return (
    <div className="wallpaperpreview-wrapper">
      <img className="wallpaperpreview-background" src={readWallPaperData?.coverImage} alt="Background-img" />
      <div className="wallpaperpreview-main">
        <div className="arrow-wrapper">
          <img className="arrow" src={Arrow} alt="arrow" />
          <p>
            스와이프해서 <br /> 내용을 읽어보세요.
          </p>
        </div>
        <div className="line-top">
          <div className='emoji-wrapper'>
            <span>
              <img src={emojiSelector(readWallPaperData?.places)} alt="지역 이모지" />
            </span>
            <span>{readWallPaperData?.places}</span>
          </div>
          <p>{readWallPaperData?.title}</p>
        </div>
        <div className="line" />
        <div className="line-bottom">
          <p>
            {`${readWallPaperData.travelDuration?.split('박')[0]}박 ${
              readWallPaperData.travelDuration?.split('박')[1]
            }간의 여정`}
          </p>
          <div className="info-box">
            <div>
              <img src={readWallPaperData?.archivingStyle === '정보' ? Information : Emotion} alt="정보/감성" />
              <p>{readWallPaperData?.archivingStyle} 위주</p>
            </div>
            <div>
              <img src={readWallPaperData?.haveCompanion ? Withfriend : Alone} alt="동료/혼자" />
              <p>{readWallPaperData?.haveCompanion ? <p>동료와</p> : <p>혼자</p>}</p>
            </div>
            <div>
              <img src={readWallPaperData?.budget === '최소한' ? LittleMoney : ManyMoney} alt="최소한/넉넉하게" />
              <p>{readWallPaperData?.budget === '넉넉' ? '넉넉하게' : readWallPaperData?.budget} 준비</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WallPaperPreview;
