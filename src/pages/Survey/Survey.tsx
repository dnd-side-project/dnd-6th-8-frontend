import React from 'react';
import Percentage from '../../components/Survey/Percentage';
import Question from '../../components/Survey/Question';
import Option from '../../components/Survey/Option';
import './Survey.scss';

function Survey() {
  return (
    <div className="survey-wrapper">
      <Percentage />
      <Question />
      <Option />
      <Option />
    </div>
  );
}

export default Survey;
