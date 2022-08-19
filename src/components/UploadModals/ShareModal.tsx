import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShare } from '../../modules/post/wallpaper';
import './ShareModal.scss';
import { RootState } from '../../modules';

type ShareModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShareModal({ closeModal }: ShareModalProps) {
  const dispatch = useDispatch();
  const share = useSelector((state: RootState) => state.wallpaper.data.share);
  // const [share, setShare] = useState<boolean>(false);
  return (
    <div className="shareModal-wrapper">
      <div className="dimmed" />
      <div className="modal">
        <div className="text">
          <img src="imgs/Upload/emoji_share_final.png" alt="upload" />
          <span className="title">{`해당 기록을 다른 사용자들에게\n공유하실건가요?`}</span>
          <div className="share-container">
            <span className={share ? 'share' : ''}>{`공유 ${share ? 'ON' : 'OFF'}`}</span>
            <label className="switch" htmlFor="toggle">
              <input type="checkbox" id="toggle" onClick={() => dispatch(setShare(!share))} />
              <span className="slider" />
            </label>
          </div>
        </div>
        <button type="button" onClick={() => closeModal(false)}>
          업로드하기
        </button>
      </div>
    </div>
  );
}

export default ShareModal;
