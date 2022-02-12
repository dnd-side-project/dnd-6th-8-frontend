import React from 'react';
import './UploadWallPaperToggle.scss';

type UploadWallPaperToggleProps = {
  text: string;
};

function UploadWallPaperToggle({ text }: UploadWallPaperToggleProps) {
  return (
    <button type="button" className="uploadWallPaperToggle-wrapper">
      {text}
    </button>
  );
}

export default UploadWallPaperToggle;
