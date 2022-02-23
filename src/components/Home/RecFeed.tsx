import React, { useCallback } from 'react';
import './Recommend.scss';
import { useNavigate } from 'react-router-dom';
import { HomeFeedsType } from '../../constants/index';

function RecFeed({ id, category, date, title, image, location, locationKR, text, heart, scrap }: HomeFeedsType) {
  const navigate = useNavigate();
  const gotoWallPaperHandler = useCallback(() => {
    navigate(`/wallpaper/${id}`);
  }, []);

  return (
    <div className="feed">
      <div role="button" tabIndex={0} className="img-container" onClick={gotoWallPaperHandler} onKeyDown={gotoWallPaperHandler}>
        <span className={`category${category === '정보' ? ' info' : ''}`}>{category}</span>
        <img src={image} alt={`${title} 피드 표지사진`} />
      </div>
      <div className="detail-container">
        <div className="detail">
          <img src={`imgs/Home/emoji_${location}.png`} alt={`${location} 이모지`} />
          <span className="kr">{locationKR}</span>
          <span className="date">{date}</span>
        </div>
        <h4>{title}</h4>
        <div className="text">{text}</div>
        <div className="icon-container">
          <img src="imgs/Home/ic_redheart.png" alt="좋아요 아이콘" />
          <span>{heart}</span>
          <img src="imgs/Home/ic_scrap.png" alt="스크랩 아이콘" />
          <span>{scrap}</span>
        </div>
      </div>
    </div>
  );
}

export default RecFeed;
