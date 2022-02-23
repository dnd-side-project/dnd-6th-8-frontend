import React from 'react';
import './UploadWallPaperToggle.scss';

type UploadWallPaperToggleProps = {
  text: string;
  value?: string;
  selected: string | boolean | null;
  setSelected: (type: string, value: string | boolean) => void;
  type: string;
};

UploadWallPaperToggle.defaultProps = {
  value: '',
};

function UploadWallPaperToggle({ text, value, selected, setSelected, type }: UploadWallPaperToggleProps) {
  const data = value || text;

  return (
    <button
      type="button"
      className={`uploadWallPaperToggle-wrapper${selected === data ? ' selected' : ''}`}
      onClick={() => setSelected(type, data)}
    >
      {text}
    </button>
  );
}

export default UploadWallPaperToggle;
