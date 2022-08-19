import React from 'react';
import { useNavigate } from 'react-router-dom';

type LocFeedProps = {
  archivingStyle: string;
  title: string;
  coverImage: string;
  places: string;
  id: number;
};

function LocFeed({ archivingStyle, title, coverImage, places, id }: LocFeedProps) {
  const navigate = useNavigate();
  const goWallPaper = () => {
    navigate(`/wallpaper/${id}`);
  };
  return (
    <div className="locFeed-wrapper" onClick={goWallPaper} aria-hidden>
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
