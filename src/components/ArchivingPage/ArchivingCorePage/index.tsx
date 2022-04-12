import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';
import { ReactComponent as UpToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_up.svg';
import { ReactComponent as DownToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_down.svg';
import { ReactComponent as AddBtn } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_upload_archiving.svg';
import Personal from './Personal';
import Shared from './Shared';
import HistoryBox from './HistoryBox';

import { RootState } from '../../../modules';

type ArchivingCorePage = {
  setDeleteClick: (click: boolean) => void;
};

function ArchivingCorePage({ setDeleteClick }: ArchivingCorePage) {
  const sharedData = useSelector((state: RootState) => state.myArchivesReducer.sharedData);
  const privateData = useSelector((state: RootState) => state.myArchivesReducer.privateData);
  const [sharedClick, setSharedClick] = useState<boolean>(true);
  const [personalClick, setPersonalClick] = useState<boolean>(true);

  const onSharedClick = (): void => setSharedClick((prev) => !prev);
  const onPersonalClick = (): void => setPersonalClick((prev) => !prev);

  const navigate = useNavigate();

  return (
    <div className="archivingCorePage-wrapper">
      <HistoryBox />
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>공유한 여행 피드</span> <span className="count">{sharedData && sharedData.length}</span>
        </div>
        <div className="feed-toggle-area">
          {sharedClick ? <DownToggle onClick={onSharedClick} /> : <UpToggle onClick={onSharedClick} />}
        </div>
      </div>
      {sharedClick && <Shared setDeleteClick={setDeleteClick} />}
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>개인소장 여행 피드</span> <span className="count">{privateData && privateData.length}</span>
        </div>
        <div className="feed-toggle-area">
          {personalClick ? <DownToggle onClick={onPersonalClick} /> : <UpToggle onClick={onPersonalClick} />}
        </div>
      </div>
      {personalClick && <Personal setDeleteClick={setDeleteClick} />}
      <AddBtn className="add-btn" onClick={() => navigate('/upload-wallpaper')} />
    </div>
  );
}

export default ArchivingCorePage;
