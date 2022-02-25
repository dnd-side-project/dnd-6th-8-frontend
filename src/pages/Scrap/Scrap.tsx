import React from 'react';
import './Scrap.scss';
import ScrapHeader from '../../components/Scrap/ScrapHeader';
import ScrapFeed from '../../components/Scrap/ScrapFeed';
import { ScrapData } from '../../constants/index';

function Scrap() {
  return (
    <div className="scrap-wrapper">
      <ScrapHeader />
      <main>
        <div className="subtitle">
          <img src="imgs/Scrap/ic_scrap_navigation_click.png" alt="scrap icon" />
          <h4>스크랩한 피드</h4>
          <span className="number">8</span>
        </div>
        <div className="scrap-container">
          {ScrapData.map((scrap) => (
            <ScrapFeed title={scrap.title} category={scrap.cateogry} image={scrap.image} key={scrap.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Scrap;
