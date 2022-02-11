import React from 'react';
import './Header.scss';

type HeaderProps = {
  isLeftButtonX: boolean;
  isRightButtonSave: boolean;
  title: string;
};

function Header({ isLeftButtonX, isRightButtonSave, title }: HeaderProps) {
  return (
    <header className="header-wrapper">
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

export default Header;
