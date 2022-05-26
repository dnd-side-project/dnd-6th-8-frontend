import React from 'react';

type LocFeedProps = {
  archivingStyle: string;
  title: string;
  coverImage: string;
  places: string;
};

function LocFeed({ archivingStyle, title, coverImage, places }: LocFeedProps) {
  return (
    <div className="locFeed-wrapper">
      <div className="img-container">
        <span className={`category${archivingStyle === '정보' ? ' info' : ''}`}>{archivingStyle}</span>
        <img src={coverImage} alt={coverImage} />
      </div>
      <div>
        <span className="date">{places}</span>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default LocFeed;
