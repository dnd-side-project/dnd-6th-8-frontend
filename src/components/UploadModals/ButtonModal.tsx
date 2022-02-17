import React from 'react';
import './ButtonModal.scss';

type ButtonModalProps = {
  title: string;
  subTitle: string;
  rightButton: string;
};

function ButtonModal({ title, subTitle, rightButton }: ButtonModalProps) {
  return (
    <div className="buttonModal-wrapper">
      <div className="dimmed" />
      <div className="modal">
        <div className="text">
          <span className="title">{title}</span>
          <span className="subTitle">{subTitle}</span>
        </div>
        <div className="buttons">
          <button type="button">취소</button>
          <button type="button">{rightButton}</button>
        </div>
      </div>
    </div>
  );
}

export default ButtonModal;
