import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScrapComponent.scss';

type ScrapFeedProps = {
  title: string;
  category: string;
  image: string;
  id: number;
};

function ScrapFeed({ title, image, category, id }: ScrapFeedProps) {
  const navigate = useNavigate();
  const gotoWallPaper = () => {
    navigate(`/wallpaper/${id}`);
  };
  return (
    <div className="scrapFeed" onClick={gotoWallPaper} aria-hidden>
      <div className="img-container">
        <span className={`category${category === '정보' ? ' info' : ''}`}>{category}</span>
        <img src={image} alt={`스크랩된 ${title} 피드 표지사진`} />
      </div>
      <div className="title-container">
        <h4>{title}</h4>
        <button type="button">
          <img src="imgs/Scrap/ic_scrap_navigation_click.png" alt="scrap icon" />
        </button>
      </div>
    </div>
  );
}

export default ScrapFeed;
