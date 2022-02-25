import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonModal.scss';

type ButtonModalProps = {
  title: string;
  subTitle: string;
  rightButton: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ButtonModal({ title, subTitle, rightButton, closeModal }: ButtonModalProps) {
  const navigate = useNavigate();
  return (
    <div className="buttonModal-wrapper">
      <div className="dimmed" />
      <div className="modal">
        <div className="text">
          <span className="title">{title}</span>
          <span className="subTitle">{subTitle}</span>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => closeModal(false)}>
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              closeModal(false);
              if (rightButton === '나가기') navigate('/archiving');
            }}
          >
            {rightButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonModal;
