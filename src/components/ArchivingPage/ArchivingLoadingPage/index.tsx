import React from 'react';
import { ReactComponent as AllRectangle } from '../../../assets/icons/ArchivingPage/ArchivingLoadingPage/allRectangle.svg';
import { ReactComponent as HalfSmallRectangle } from '../../../assets/icons/ArchivingPage/ArchivingLoadingPage/halfSmallRectangle.svg';
import { ReactComponent as Square } from '../../../assets/icons/ArchivingPage/ArchivingLoadingPage/square.svg';
import { ReactComponent as HalfBigRectangle } from '../../../assets/icons/ArchivingPage/ArchivingLoadingPage/halfBigRectangle.svg';
import './style.scss';

function ArchivingLoadingPage() {
  return (
    <div className="archivingloadingpage-wrapper">
      <div className="allRectangle-line">
        <AllRectangle />
      </div>
      <div className="halfSmallRectangle-line">
        <HalfSmallRectangle />
      </div>
      <div className="squareHalfBig1-line">
        <Square />
        <HalfBigRectangle />
      </div>
      <div className="squareHalfBig2-line">
        <Square />
        <HalfBigRectangle />
      </div>
      <div className="halfSmallRectangle-line">
        <HalfSmallRectangle />
      </div>
      <div className="squareHalfBig2-line">
        <Square />
        <HalfBigRectangle />
      </div>
    </div>
  );
}

export default ArchivingLoadingPage;
