import React, { useEffect, useState } from 'react';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import Card from '../Card';
import './style.scss';

type PersonalProps = {
  personalInfo: Array<{
    archivingStyle: string;
    region: string;
    period: string,
    completeArchive: string;
    title: string;
  }>;
  setDeleteClick: (click: boolean) => void;
};

interface personalMap {
  archivingStyle: string;
  region: string;
  period: string;
  completeArchive: string;
  title: string;
}

function Personal({ personalInfo, setDeleteClick }: PersonalProps) {
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [fetchDataLength, setFetchDataLength] = useState<number>(0);

  useEffect(() => {
    if (personalInfo !== undefined) {
      setFetchData(true);
      setFetchDataLength(personalInfo.length);
    }
  }, [personalInfo]);

  return (
    <div className="personal-wrapper">
      {fetchDataLength ? (
        personalInfo.map((value: personalMap) => {
          return <Card info={value} setDeleteClick={setDeleteClick} key={value.title} />;
        })
      ) : (
        <Book className="personal-book" />
      )}
    </div>
  );
}

export default Personal;
