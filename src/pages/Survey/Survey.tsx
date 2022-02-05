import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Percentage from '../../components/Survey/Percentage';
import Question from '../../components/Survey/Question';
import Option from '../../components/Survey/Option';
import './Survey.scss';

function Survey() {
  const [finish, setFinish] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const number: string | null = searchParams.get('number');

  const onNextSurvey = () => {
    let next = '';
    switch (number) {
      case '3':
        next = '3';
        setFinish(true);
        break;
      case null:
        next = '1';
        break;
      default:
        next = (parseInt(number, 10) + 1).toString();
    }
    setTimeout(() => {
      setSearchParams({ number: next });
      if (number !== '3') setSelect(0);
    }, 1000);
  };

  return (
    <div className="survey-wrapper">
      <div className="survey">
        <Percentage number={number} />
        <Question number={number} />
        <Option number={number} onNextSurvey={onNextSurvey} select={select} setSelect={setSelect} />
      </div>
      {number === '3' && (
        <button type="button" className={`button ${finish && 'finish'}`}>
          트레셔스 시작하기
        </button>
      )}
    </div>
  );
}

export default Survey;
