import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReactComponent as UpToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_up.svg';
import { ReactComponent as DownToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_down.svg';
import { ReactComponent as AddBtn } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_upload_archiving.svg';
import Personal from './Personal';
import Shared from './Shared';
import HistoryBox from './HistoryBox';
import { archiveCorePageReadFetchData } from '../../../constants/index';

function ArchivingCorePage() {
  const [sharedInfo, setSharedInfo] = useState();
  const [personalInfo, setPersonalInfo] = useState();
  const [sharedInfoLen, setSharedInfoLen] = useState<number>(0); 
  const [personalInfoLen, setPersonalInfoLen] = useState<number>(0); 


  useEffect(() => {
    if (archiveCorePageReadFetchData !== undefined) {
      setSharedInfo(archiveCorePageReadFetchData.sharedInfo);
      setPersonalInfo(archiveCorePageReadFetchData.personalInfo);
      setSharedInfoLen(archiveCorePageReadFetchData.sharedInfo.length); 
      setPersonalInfoLen(archiveCorePageReadFetchData.personalInfo.length); 
    }
  }, [archiveCorePageReadFetchData]);

  const [sharedClick, setSharedClick] = useState<boolean>(true);
  const [personalClick, setPersonalClick] = useState<boolean>(true);

  const onSharedClick = (): void => setSharedClick((prev) => !prev);
  const onPersonalClick = (): void => setPersonalClick((prev) => !prev);

  return (
    <div className="archivingCorePage-wrapper">
      <HistoryBox sharedInfo={sharedInfo} personalInfo={personalInfo} />
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>공유한 여행 피드</span> <span className="count">{sharedInfoLen && sharedInfoLen}</span>
        </div>
        <div className="feed-toggle-area">
          {sharedClick ? <DownToggle onClick={onSharedClick} /> : <UpToggle onClick={onSharedClick} />}
        </div>
      </div>
      {sharedClick && <Shared sharedInfo={sharedInfo} />}
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>개인소장 여행 피드</span> <span className="count">{personalInfoLen && personalInfoLen}</span>
        </div>
        <div className="feed-toggle-area">
          {personalClick ? <DownToggle onClick={onPersonalClick} /> : <UpToggle onClick={onPersonalClick} />}
        </div>
      </div>
      {personalClick && <Personal personalInfo={personalInfo} />}
      <AddBtn className="add-btn" />
    </div>
  );
}

export default ArchivingCorePage;
