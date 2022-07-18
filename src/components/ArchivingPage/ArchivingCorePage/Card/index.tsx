/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/button-has-type */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.scss';
import { archivingType } from '../../../../constants/index';
import defaultImg from '../../../../assets/icons/ArchivingPage/Card/defaultImg.png';

type CardProps = {
  info: archivingType;
  setDeleteClick: (click: boolean) => void;
  setDeleteId: (number: number) => void;
};

function Card({ info, setDeleteClick, setDeleteId }: CardProps) {
  const navigate = useNavigate();
  const onDeleteHandler = useCallback(() => {
    setDeleteClick(true);
    setDeleteId(info.id);
  }, []);

  const onEditHandler = useCallback(() => {
    navigate('/upload-wallpaper', { state: info.id });
  }, []);

  const gotoWallPaper = () => {
    navigate(`/wallpaper/${info.id}`);
  };

  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img
          role="button"
          tabIndex={0}
          className="imgs"
          src={info.coverImage === null ? defaultImg : info.coverImage}
          alt="메인이미지"
          onClick={gotoWallPaper}
          onKeyDown={gotoWallPaper}
        />
        <div className={`type-${info.archivingStyle}`}>{info.archivingStyle}</div>
      </div>
      <div className="card-info">
        <div className="info-header">
          <span>🚄</span>
          <span className="region">{info.places}</span>
          <span className="day-box">{info.travelDuration}</span>
        </div>
        <div className="info-title">{info.title}</div>
        <div className="info-btn">
          <button onClick={onEditHandler}>수정하기</button>
          <button onClick={onDeleteHandler}>삭제하기</button>
        </div>
        <div className="info-date">
          <p>
            게시완료 <span>{info.createdAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
