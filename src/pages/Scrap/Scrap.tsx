import React, { useEffect } from 'react';
import './Scrap.scss';
import { useDispatch, useSelector } from 'react-redux';
import ScrapHeader from '../../components/Scrap/ScrapHeader';
import ScrapFeed from '../../components/Scrap/ScrapFeed';
import { ScrapDataType } from '../../constants/index';
import { getScrapList } from '../../modules/scrap/scrap';
import { RootState } from '../../modules';

function Scrap() {
  const dispatch = useDispatch();
  const scrapList = useSelector((state: RootState) => state.scrap.data.scrapPreviewDto);

  useEffect(() => {
    dispatch(getScrapList());
  }, [dispatch]);

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
          {scrapList?.map((scrap: ScrapDataType) => (
            <ScrapFeed
              title={scrap.archiveTitle}
              category={scrap.archivingStyle}
              image={scrap.coverImage}
              id={scrap.archiveId}
              key={scrap.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Scrap;
