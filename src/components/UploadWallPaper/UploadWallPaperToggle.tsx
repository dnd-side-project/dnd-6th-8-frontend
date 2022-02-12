import React from 'react';
import './UploadWallPaperToggle.scss';

type UploadWallPaperToggleProps = {
  text: string;
  id: number; // 클릭한 버튼의 index로 css 지정
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

function UploadWallPaperToggle({ text, id, selected, setSelected }: UploadWallPaperToggleProps) {
  const changeSelected = (clickID: number) => {
    setSelected(clickID);
  };
  return (
    <button
      type="button"
      className={`uploadWallPaperToggle-wrapper${selected === id ? ' selected' : ''}`}
      onClick={() => changeSelected(id)}
    >
      {text}
    </button>
  );
}

export default UploadWallPaperToggle;
