import React, { useCallback } from 'react';
import './Recommend.scss';
import { useNavigate } from 'react-router-dom';

type RecFeedProps = {
  id: number;
  archivingStyle: string;
  coverPicture: string;
  places: string;
  title: string;
  travelDuration: string;
};

function RecFeed({ id, archivingStyle, coverPicture, places, title, travelDuration }: RecFeedProps) {
  const navigate = useNavigate();
  const gotoWallPaperHandler = useCallback(() => {
    navigate(`/wallpaper/${id}`);
  }, []);

  return (
    <div className="feed">
      <div
        role="button"
        tabIndex={0}
        className="img-container"
        onClick={gotoWallPaperHandler}
        onKeyDown={gotoWallPaperHandler}
      >
        <span className={`category${archivingStyle === '정보' ? ' info' : ''}`}>{archivingStyle}</span>
        <img src={coverPicture} alt={`${title} 피드 표지사진`} />
      </div>
      <div className="detail-container">
        <div className="detail">
          <img src="imgs/Home/emoji_busan.png" alt={`${places} 지역 이모지`} />
          <span className="kr">{places}</span>
          <span className="date">{travelDuration}</span>
        </div>
        <h4>{title}</h4>
        <div className="text">미리보기 글</div>
        <div className="icon-container">
          <img src="imgs/Home/ic_redheart.png" alt="좋아요 아이콘" />
          <span>10</span>
          <img src="imgs/Home/ic_scrap.png" alt="스크랩 아이콘" />
          <span>11</span>
        </div>
      </div>
    </div>
  );
}

export default RecFeed;
