import React, { useState } from 'react';
import './ShareModal.scss';

function ShareModal() {
  const [share, setShare] = useState<boolean>(false);
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
              <input type="checkbox" id="toggle" onClick={() => setShare(!share)} />
              <span className="slider" />
            </label>
          </div>
        </div>
        <button type="button">업로드하기</button>
      </div>
    </div>
  );
}

export default ShareModal;
