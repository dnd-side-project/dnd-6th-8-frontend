import React from 'react';
import './Option.scss';
import icon from '../../assets/icons/Survey/emoji_group_survey.png';

function Option() {
  return (
    <div className="option-wrapper">
      <img src={icon} alt="icon" className="icon" />
      <div className="text">혼자여행</div>
    </div>
  );
}

export default Option;
