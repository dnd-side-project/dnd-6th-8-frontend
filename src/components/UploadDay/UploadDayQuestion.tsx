import React from 'react';
import './UploadDayQuestion.scss';

type UploadDayQuestionProps = {
  text: string;
  necessary?: boolean;
  subtext?: string;
  emoji?: boolean;
};

UploadDayQuestion.defaultProps = {
  necessary: false,
  subtext: '',
  emoji: false,
};

function UploadDayQuestion({ text, necessary, subtext, emoji }: UploadDayQuestionProps) {
  return (
    <div className="uploadDayQuestion-wrapper">
      {emoji && <img src="imgs/Upload/emoji_light_archiving.png" alt="light" />}
      <span className="text">{text}</span>
      {necessary ? <span className="necessary">필수</span> : <span className="subtext">{subtext}</span>}
    </div>
  );
}

export default UploadDayQuestion;
