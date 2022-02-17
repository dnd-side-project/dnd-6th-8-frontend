import React from 'react';
import './UploadHeader.scss';

type UploadHeaderProps = {
  isCanGoBack: boolean;
  isRightButtonSave: boolean;
  title: string;
};

function UploadHeader({ isCanGoBack, isRightButtonSave, title }: UploadHeaderProps) {
  return (
    <header className="uploadHeader-wrapper">
      <div className="left">
        {isCanGoBack && (
          <button type="button" className="back">
            <img src="imgs/Upload/ic_back.png" alt="x" />
          </button>
        )}
        <button type="button">나가기</button>
      </div>
      <div className="title">{title}</div>
      <div className="right">
        {isRightButtonSave ? (
          <button type="button" className="select">
            저장하기
          </button>
        ) : (
          <button type="button">선택하기</button>
        )}
      </div>
    </header>
  );
}

export default UploadHeader;
