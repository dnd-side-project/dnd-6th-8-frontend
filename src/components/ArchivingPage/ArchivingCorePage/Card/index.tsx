/* eslint-disable react/button-has-type */
import React from 'react';
import './style.scss';

type CardProps = {
  info: any;
};

function Card({ info }: CardProps) {
  return (
    <div className="card-wrapper">
      <div className="card-img">
        <div className={`type-${info.archivingStyle}`}>{info.archivingStyle}</div>
      </div>
      <div className="card-info">
        <div className="info-header">
          <span>🚄</span>
          <span className="region">{info.region}</span>
          <span className="day-box">{info.period}</span>
        </div>
        <div className="info-title">{info.title}</div>
        <div className="info-btn">
          <button>수정하기</button>
          <button>삭제하기</button>
        </div>
        <div className="info-date">
          <p>
            게시완료 <span>{info.completeArchive}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
