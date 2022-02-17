import React from 'react';
import './UploadWallPaperQuestion.scss';

type UploadWallPaperQuestionProps = {
  number: number;
  title: string;
};

function UploadWallPaperQuestion({ number, title }: UploadWallPaperQuestionProps) {
  return (
    <div className="uploadWallPaperQuestion-wrapper">
      <div className="number">{number}</div>
      <div className="title">{title}</div>
      {number === 1 && <span>(1장선택)</span>}
    </div>
  );
}

export default UploadWallPaperQuestion;
