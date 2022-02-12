import React from 'react';
import './BottomButton.scss';

type BottomButtonProps = {
  selected: [
    selected1: File | null,
    selected2: string,
    selected3: number,
    selected4: number,
    selected5: number,
    selected6: number,
    selected7: number,
  ];
};

function BottomButton({ selected }: BottomButtonProps) {
  const complete: boolean =
    selected[0] !== null &&
    selected[1] !== '' &&
    selected[2] > 0 &&
    selected[3] > 0 &&
    selected[4] > 0 &&
    selected[5] > 0 &&
    selected[6] > 0;
  return (
    <button type="button" className={`bottomButton-wrapper${complete ? ' complete' : ''}`}>
      다음으로
    </button>
  );
}

export default BottomButton;
