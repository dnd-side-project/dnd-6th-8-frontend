import React, { useState } from 'react';
import './style.scss';
import { ReactComponent as UpToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_up.svg';
import { ReactComponent as DownToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_down.svg';
import { ReactComponent as AddBtn } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_upload_archiving.svg';
import Personal from './Personal';
import Shared from './Shared';
import HistoryBox from './HistoryBox';

function ArchivingCorePage() {
  const [sharedClick, setSharedClick] = useState<boolean>(true);
  const [personalClick, setPersonalClick] = useState<boolean>(true);

  const onSharedClick = (): void => setSharedClick((prev) => !prev);
  const onPersonalClick = (): void => setPersonalClick((prev) => !prev);

  return (
    <div className="archivingCorePage-wrapper">
      <HistoryBox />
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>공유한 여행 피드</span> <span className='count'>0</span>
        </div>
        <div className="feed-toggle-area">
          {sharedClick ? <DownToggle onClick={onSharedClick} /> : <UpToggle onClick={onSharedClick} />}
        </div>
      </div>
      {sharedClick && <Shared />}
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>개인소장 여행 피드</span> <span className='count'>0</span>
        </div>
        <div className="feed-toggle-area">
          {personalClick ? <DownToggle onClick={onPersonalClick} /> : <UpToggle onClick={onPersonalClick} />}
        </div>
      </div>
      {personalClick && <Personal />}
      <AddBtn className="add-btn" />
    </div>
  );
}

export default ArchivingCorePage;
