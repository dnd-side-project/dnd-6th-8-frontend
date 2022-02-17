/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import './style.scss';
import { archivingDataType } from '../../../../constants/index';

type CardProps = {
  info: archivingDataType;
  setDeleteClick: (click: boolean) => void;
};

function Card({ info, setDeleteClick }: CardProps) {
  const onDeleteHandler = useCallback(() => {
    setDeleteClick(true);
  }, []);

  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img className="imgs" src={info.img} alt="메인이미지" />
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
          <button onClick={onDeleteHandler}>삭제하기</button>
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
