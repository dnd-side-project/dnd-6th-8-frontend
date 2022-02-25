import React, { useState } from 'react';
import './EmotionModal.scss';

type EmotionModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function EmotionModal({ closeModal, openModal }: EmotionModalProps) {
  const [selectedID, setSelectedID] = useState<number>(0);

  return (
    <div className="emotionModal-wrapper">
      <div className="dimmed" />
      <div className="modal">
        <div className="text">
          <img src="imgs/Upload/emoji_bubble_final.png" alt="bubble" />
          <span className="title">{`이번 여행은 어떠셨나요?\n감정 스티커로 표현해보세요.`}</span>
          <div className="sticker-container">
            <button
              className={`sticker${selectedID === 1 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(1)}
            >
              <img src="imgs/Upload/illust_sticker01.png" alt="sticker01" />
              <span>즐거움</span>
            </button>
            <button
              className={`sticker${selectedID === 2 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(2)}
            >
              <img src="imgs/Upload/illust_sticker02.png" alt="sticker02" />
              <span>도전</span>
            </button>
            <button
              className={`sticker${selectedID === 3 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(3)}
            >
              <img src="imgs/Upload/illust_sticker03.png" alt="sticker03" />
              <span>감동적</span>
            </button>
            <button
              className={`sticker${selectedID === 4 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(4)}
            >
              <img src="imgs/Upload/illust_sticker04.png" alt="sticker04" />
              <span>힐링</span>
            </button>
            <button
              className={`sticker${selectedID === 5 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(5)}
            >
              <img src="imgs/Upload/illust_sticker05.png" alt="sticker05" />
              <span>힘듦</span>
            </button>
            <button
              className={`sticker${selectedID === 6 ? ' selected' : ''}`}
              type="button"
              onClick={() => setSelectedID(6)}
            >
              <img src="imgs/Upload/illust_sticker06.png" alt="sticker06" />
              <span>울적함</span>
            </button>
          </div>
        </div>
        <button
          type="button"
          className="closeBtn"
          onClick={() => {
            closeModal(false);
            openModal(true);
          }}
        >
          선택 완료
        </button>
      </div>
    </div>
  );
}

export default EmotionModal;
