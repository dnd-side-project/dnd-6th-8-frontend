import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBadge } from '../../modules/post/wallpaper';
import './EmotionModal.scss';

type EmotionModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const badgeList = ['즐거움', '도전', '감동적', '힐링', '힘듦', '울적함'];

function EmotionModal({ closeModal, openModal }: EmotionModalProps) {
  const dispatch = useDispatch();
  const [selectedID, setSelectedID] = useState<number>(-1);

  return (
    <div className="emotionModal-wrapper">
      <div className="dimmed" />
      <div className="modal">
        <div className="text">
          <img src="imgs/Upload/emoji_bubble_final.png" alt="bubble" />
          <span className="title">{`이번 여행은 어떠셨나요?\n감정 스티커로 표현해보세요.`}</span>
          <div className="sticker-container">
            {badgeList.map((badge, idx) => (
              <button
                className={`sticker${selectedID === idx ? ' selected' : ''}`}
                type="button"
                onClick={() => {
                  dispatch(setBadge(badge));
                  setSelectedID(idx);
                }}
                key={badge}
              >
                <img src={`imgs/Upload/illust_sticker0${idx + 1}.png`} alt={`${badge} sticker`} />
                <span>{badge}</span>
              </button>
            ))}

            {/* <button
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
            </button> */}
          </div>
        </div>
        <button
          type="button"
          className="closeBtn"
          disabled={selectedID === -1}
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
