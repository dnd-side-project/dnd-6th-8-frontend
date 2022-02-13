import React from 'react';
import { HomeFeedsType } from '../../../constants';
import './style.scss';

type WallPaperDetailViewProps = {
  fetchData: HomeFeedsType | undefined;
};

function WallPaperDetailView({ fetchData }: WallPaperDetailViewProps) {
  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p>{fetchData && fetchData.title}</p>
        <p>2022.01.10 - 01.14 </p>
      </div>
      <div className='day-tab'>
        123
      </div>
    </div>
  );
}

export default WallPaperDetailView;
