import React, { useEffect } from 'react';
import './style.scss';

type TabHeaderProps = {
  day: number;
  index: number;
};

function TabHeader({ day, index }: TabHeaderProps) {
  useEffect(() => {
    console.log(day, index);
  }, []);

  return (
    <div className="tabheader-wrapper">
      {/* <span className={day === index + 1 ? 'click-tab' : 'non-click-tab'}>Day {day}</span> */}
      {day === index + 1 ? (
        <span className="click-tab">Day {day}</span>
      ) : (
        <span className="non-click-tab">Day {day}</span>
      )}
    </div>
  );
}

export default TabHeader;
