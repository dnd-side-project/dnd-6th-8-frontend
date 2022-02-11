import React from 'react';
import './UploadQuestion.scss';

type UploadQuestionProps = {
  number: number;
  title: string;
};

function UploadQuestion({ number, title }: UploadQuestionProps) {
  return (
    <div className="uploadQuestion-wrapper">
      <div className="number">{number}</div>
      <div className="title">{title}</div>
    </div>
  );
}

export default UploadQuestion;
