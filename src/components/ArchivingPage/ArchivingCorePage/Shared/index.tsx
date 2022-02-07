/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import Card from '../Card';
import './style.scss';

type SharedProps = {
  sharedInfo: any;
  setDeleteClick: (click: boolean) => void;
};

function Shared({ sharedInfo, setDeleteClick }: SharedProps) {
  const [fetchData, setFetchData] = useState<boolean>(false);

  useEffect(() => {
    if (sharedInfo !== undefined) {
      setFetchData(true);
    }
  }, [sharedInfo]);

  return (
    <div className="shared-wrapper">
      {fetchData ? (
        sharedInfo.map((value: any) => {
          // eslint-disable-next-line react/jsx-key
          return <Card info={value} setDeleteClick={setDeleteClick}/>;
        })
      ) : (
        <Book className="shared-book" />
      )}
    </div>
  );
}

export default Shared;
