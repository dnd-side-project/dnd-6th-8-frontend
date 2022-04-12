/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import Card from '../Card';
import './style.scss';
import { archivingType } from '../../../../constants/index';
import { RootState } from '../../../../modules';

type SharedProps = {
  setDeleteClick: (click: boolean) => void;
  setDeleteId: (number: number) => void;
};

function Shared({ setDeleteClick, setDeleteId }: SharedProps) {
  const sharedData = useSelector((state: RootState) => state.myArchivesReducer.sharedData);
  return (
    <div className="shared-wrapper">
      {sharedData ? (
        sharedData.map((value: archivingType) => {
          return <Card info={value} setDeleteClick={setDeleteClick} setDeleteId={setDeleteId} key={value.id} />;
        })
      ) : (
        <Book className="shared-book" />
      )}
    </div>
  );
}

export default Shared;
