import React from 'react';
import './ScrapComponent.scss';

type ScrapFeedProps = {
  title: string;
  image: string;
  category: string;
};

function ScrapFeed({ title, image, category }: ScrapFeedProps) {
  return (
    <div className="scrapFeed">
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
