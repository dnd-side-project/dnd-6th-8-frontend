import React from 'react';
import './style.scss';

function ArchivingLoadingPage() {
  return (
    <div className="archivingloadingpage-wrapper">
      <div className="allRectangle-line">
        <div className="allRectangle" />
      </div>
      <div className="halfSmallRectangle-line">
        <div className="halfSmallRectangle" />
      </div>
      <div className="squareHalfBig1-line">
        <div className="square" />
        <div className="halfBigRectangle" />
      </div>
      <div className="squareHalfBig2-line">
        <div className="square" />
        <div className="halfBigRectangle" />
      </div>
      <div className="halfSmallRectangle-line">
        <div className="halfSmallRectangle" />
      </div>
      <div className="squareHalfBig2-line">
        <div className="square" />
        <div className="halfBigRectangle" />
      </div>
    </div>
  );
}

export default ArchivingLoadingPage;
