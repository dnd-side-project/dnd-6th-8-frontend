import React, { useState } from 'react';
import './style.scss';

function HistoryBox() {
  const [historyIcon, setHistoryIcon] = useState<boolean>(false);
  return (
    <div className="historybox-wrapper">
      <div className="history-inner-box">
        <img className="pencil" src="/imgs/ArchivingPage/ArchivingCorePage/emoji_pencil.png" alt="연필" />
        <div className="history-box-number">
          <span>지금까지 기록한 여행</span> <span>0</span>
        </div>
      </div>
      <div className="history-icon">{historyIcon ? <>여기는 배찌가 나오는 영역</> : <>기록한 여행이 없습니다</>}</div>
    </div>
  );
}

export default HistoryBox;
