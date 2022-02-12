import React from 'react';
import './UploadWallPaperHeader.scss';

type UploadWallPaperHeaderProps = {
  isLeftButtonX: boolean;
  isRightButtonSave: boolean;
  title: string;
};

function UploadWallPaperHeader({ isLeftButtonX, isRightButtonSave, title }: UploadWallPaperHeaderProps) {
  return (
    <header className="uploadWallPaperHeader-wrapper">
      {isLeftButtonX ? <img src="imgs/UploadPage/ic_x.png" alt="x" /> : <button type="button">나가기</button>}
      <span>{title}</span>
      {isRightButtonSave ? (
        <button type="button" className="select">
          저장하기
        </button>
      ) : (
        <button type="button">선택하기</button>
      )}
    </header>
  );
}

export default UploadWallPaperHeader;
