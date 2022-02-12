import React from 'react';
import { HomeFeedsType } from '../../constants/index';

function LocFeed({ id, category, date, title, image, location }: HomeFeedsType) {
  return (
    <div className="feed">
      <div className="img-container">
        <span className={`category${category === '정보' ? ' info' : ''}`}>{category}</span>
        <img src={image} alt={location} />
      </div>
      <div>
        <span className="date">{date}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default LocFeed;
