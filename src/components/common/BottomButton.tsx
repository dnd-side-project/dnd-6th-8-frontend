import React from 'react';
import './BottomButton.scss';

type BottomButtonProps = {
  data: {
    coverImage: File | null;
    title: string;
    place: string;
    firstDay: string;
    lastDay: string;
    haveCompanion: boolean | null;
    budget: string;
    archivingStyle: string;
  };
};

function BottomButton({ data }: BottomButtonProps) {
  const complete: boolean =
    data.coverImage !== null &&
    data.title !== '' &&
    data.place !== '' &&
    data.firstDay !== '' &&
    data.lastDay !== '' &&
    data.haveCompanion !== null &&
    data.budget !== '' &&
    data.archivingStyle !== '';
  return (
    <button type="button" className={`bottomButton-wrapper${complete ? ' complete' : ''}`}>
      다음으로
    </button>
  );
}

export default BottomButton;
