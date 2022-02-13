import React from 'react';
import './UploadAlert.scss';

type UploadAlertProps = {
  emoji: string;
  text: string;
};

function UploadAlert({ emoji, text }: UploadAlertProps) {
  return (
    <div className="uploadAlert-wrapper">
      <div className="dimmed" />
      <div className="text">
        <img src={`imgs/UploadPage/emoji_${emoji}_toast.png`} alt="file" />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default UploadAlert;
