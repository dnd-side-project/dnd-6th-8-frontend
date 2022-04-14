import React from 'react';

type LocFeedProps = {
  archivingStyle: string;
  title: string;
  coverPicture: string;
  places: string;
};

function LocFeed({ archivingStyle, title, coverPicture, places }: LocFeedProps) {
  return (
    <div className="locFeed-wrapper">
      <div className="img-container">
        <span className={`category${archivingStyle === '정보' ? ' info' : ''}`}>{archivingStyle}</span>
        <img src={coverPicture} alt={coverPicture} />
      </div>
      <div>
        <span className="date">{places}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default LocFeed;
