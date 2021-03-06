import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import Card from '../Card';
import './style.scss';
import { archivingType } from '../../../../constants/index';
import { RootState } from '../../../../modules';

type PersonalProps = {
  setDeleteClick: (click: boolean) => void;
  setDeleteId: (number: number) => void;
};

function Personal({ setDeleteClick, setDeleteId }: PersonalProps) {
  const privateData = useSelector((state: RootState) => state.myArchivesReducer.privateData);

  return (
    <div className="personal-wrapper">
      {privateData.length !== 0 ? (
        privateData.map((value: archivingType) => {
          return <Card info={value} setDeleteClick={setDeleteClick} setDeleteId={setDeleteId} key={value.id} />;
        })
      ) : (
        <Book className="personal-book" />
      )}
    </div>
  );
}

export default Personal;
