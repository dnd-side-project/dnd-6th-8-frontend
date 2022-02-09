import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReactComponent as UpToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_up.svg';
import { ReactComponent as DownToggle } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_dropdown_archiving_down.svg';
import { ReactComponent as AddBtn } from '../../../assets/icons/ArchivingPage/ArchivingCorePage/ic_upload_archiving.svg';
import Personal from './Personal';
import Shared from './Shared';
import HistoryBox from './HistoryBox';

type ArchivingCorePage = {
  setDeleteClick: (click: boolean) => void;
};

interface data {
  archivingStyle: string;
  region: string;
  period: string;
  completeArchive: string;
  title: string;
}

function ArchivingCorePage({ setDeleteClick }: ArchivingCorePage) {
  const archiveCorePageReadFetchData = {
    sharedInfo: [
      {
        archivingStyle: '정보',
        region: '제주도',
        period: '4박5일',
        completeArchive: '2022.01.02',
        title: '대충 다녀도 아름다운 제주도',
      },
      {
        archivingStyle: '감정',
        region: '강릉/속초',
        period: '2박3일',
        completeArchive: '2022.02.01',
        title: '강릉바다에 풍덩!',
      },
    ],
    personalInfo: [
      {
        archivingStyle: '감정',
        region: '러시아',
        period: '5박6일',
        completeArchive: '2022.02.12',
        title: '황홀한 아름다움, 러시아 궁전',
      },
      
    ],
  };
  const [sharedInfo, setSharedInfo] = useState<data[]>([]);
  const [personalInfo, setPersonalInfo] = useState<data[]>([]);
  const [sharedInfoLen, setSharedInfoLen] = useState<number>(0);
  const [personalInfoLen, setPersonalInfoLen] = useState<number>(0);

  useEffect(() => {
    if (archiveCorePageReadFetchData !== undefined || archiveCorePageReadFetchData !== null) {
      setSharedInfo(archiveCorePageReadFetchData.sharedInfo);
      setPersonalInfo(archiveCorePageReadFetchData.personalInfo);
      setSharedInfoLen(archiveCorePageReadFetchData.sharedInfo.length);
      setPersonalInfoLen(archiveCorePageReadFetchData.personalInfo.length);
    }
  }, []);

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
      {sharedClick && <Shared sharedInfo={sharedInfo} setDeleteClick={setDeleteClick} />}
      <div className="travel-feed">
        <div className="feed-title-area">
          <span>개인소장 여행 피드</span> <span className="count">{personalInfoLen && personalInfoLen}</span>
        </div>
        <div className="feed-toggle-area">
          {personalClick ? <DownToggle onClick={onPersonalClick} /> : <UpToggle onClick={onPersonalClick} />}
        </div>
      </div>
      {personalClick && <Personal personalInfo={personalInfo} setDeleteClick={setDeleteClick} />}
      <AddBtn className="add-btn" />
    </div>
  );
}

export default ArchivingCorePage;
