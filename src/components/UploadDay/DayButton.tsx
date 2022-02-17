import React from 'react';
import './DayButton.scss';

type DayButtonProps = {
  day: number;
  changeDay: (clickDay: number) => void;
  deleteDay: (deleteDay: number) => void;
  selectedDay: number;
  dayLength: number;
};

function DayButton({ day, changeDay, deleteDay, selectedDay, dayLength }: DayButtonProps) {
  return (
    <div className="dayButton-wrapper">
      <button
        type="button"
        className={`dayButton${selectedDay === day ? ' selected' : ''}`}
        onClick={() => changeDay(day)}
      >
        Day{day}
      </button>
      <button
        type="button"
        className={selectedDay === day && dayLength > 1 ? '' : 'hidden'}
        onClick={() => deleteDay(day)}
      >
        <img src="imgs/Upload/ic_daydelete_upload.png" alt="Day Delete" />
      </button>
    </div>
  );
}

export default DayButton;
