import React from 'react';
import './Question.scss';

type QuestionProps = {
  number: string | null;
};

function Question({ number }: QuestionProps) {
  let question = '';
  switch (number) {
    case '1':
      question = '어떤 여행을 즐기시는 편인가요?';
      break;
    case '2':
      question = '여행을 준비할때,\n예산은 어떻게 계획하시나요?';
      break;
    case '3':
      question = '여행에 대한 기록을 볼 때,\n어떤 글을 보고싶으신가요?';
      break;
    default:
      question = '';
  }
  return (
    <div className="question-wrapper">
      <div className="step">{`STEP ${number}`}</div>
      <div className="question">{question}</div>
    </div>
  );
}

export default Question;
