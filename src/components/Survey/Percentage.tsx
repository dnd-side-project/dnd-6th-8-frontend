import React from 'react';
import './Percentage.scss';

type PercentageProps = {
  number: string | null;
};

function Percentage({ number }: PercentageProps) {
  let num = '';
  switch (number) {
    case '2':
      num = 'two';
      break;
    case '3':
      num = 'three';
      break;
    default:
  }

  return (
    <div className="percentage-wrapper">
      <div className={`percentage ${num}`} />
    </div>
  );
}

export default Percentage;
