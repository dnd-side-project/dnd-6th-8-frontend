import React, { useEffect, useState } from 'react';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import Card from '../Card';
import './style.scss';
import { archivingDataType } from '../../../../constants/index';

type PersonalProps = {
  personalInfo: archivingDataType[];
  setDeleteClick: (click: boolean) => void;
};

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
        personalInfo.map((value: archivingDataType) => {
          return <Card info={value} setDeleteClick={setDeleteClick} key={value.title} />;
        })
      ) : (
        <Book className="personal-book" />
      )}
    </div>
  );
}

export default Personal;
