import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScrapComponent.scss';

function ScrapHeader() {
  const navigate = useNavigate();

  return (
    <header className="scrapHeader">
      <button type="button" onClick={() => navigate(-1)}>
        <img src="imgs/Upload/ic_back.png" alt="back" />
      </button>
      <h1>스크랩</h1>
    </header>
  );
}

export default ScrapHeader;
