import React from 'react';
import './Recommend.scss';
import { HomeFeedsType } from '../../constants/index';

function RecFeed({ category, date, title, image, location, locationKR, text, heart, scrap }: HomeFeedsType) {
  return (
    <div className="feed">
      <div className="img-container">
        <span className={`category${category === '정보' ? ' info' : ''}`}>{category}</span>
        <img src={image} alt={location} />
      </div>
      <div className="detail-container">
        <div className="detail">
          <img src={`imgs/Home/emoji_${location}.png`} alt="emoji" />
          <span className="kr">{locationKR}</span>
          <span className="date">{date}</span>
        </div>
        <h4>{title}</h4>
        <div className="text">{text}</div>
        <div className="icon-container">
          <img src="imgs/Home/ic_redheart.png" alt="heart" />
          <span>{heart}</span>
          <img src="imgs/Home/ic_scrap.png" alt="scrap" />
          <span>{scrap}</span>
        </div>
      </div>
    </div>
  );
}

export default RecFeed;
