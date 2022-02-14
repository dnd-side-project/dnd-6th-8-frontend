import React, { useEffect } from 'react';
import './style.scss';

type TabHeaderProps = {
  day: number;
};

function TabHeader({ day }: TabHeaderProps) {
  useEffect(() => {
    console.log(day, typeof day);
  }, []);
  return (
    <div className="tabheader-wrapper">
      <span className="click-tab">Day {day}</span>
    </div>
  );
}

export default TabHeader;
