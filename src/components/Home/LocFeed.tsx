import React from 'react';

type FeedProps = {
  category: string;
  title: string;
  date: string;
};

function LocFeed({ category, title, date }: FeedProps) {
  return (
    <div className="feed">
      <div className="img-container">
        <span className={`category${category === '정보' ? ' info' : ''}`}>{category}</span>
        <img src="imgs/LocationFeed/img_busan01_home.png" alt="busan" />
      </div>
      <div>
        <span className="date">{date}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default LocFeed;
