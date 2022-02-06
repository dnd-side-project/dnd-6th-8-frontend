import React from 'react';
import './style.scss';
import { ReactComponent as UpToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_up.svg';
import { ReactComponent as DownToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_down.svg';

function ArchivingCorePage() {
  return (
    <div className="archivingCorePage-wrapper">
      <div className="archiving-history-box">지금까지 기록한 여행</div>
      <div className="shared-travel-feed">
        <span>공유한 여행 피드</span> <span>0</span> <UpToggle />
      </div>
      <div className="personal-get-feed">
        <span>공유한 여행 피드</span> <span>0</span> <UpToggle />
      </div>
    </div>
  );
}

export default ArchivingCorePage;
