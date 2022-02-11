import React from 'react';
import './Upload.scss';
import Header from '../../components/UploadPage/Header';

function Upload() {
  return (
    <div>
      <Header isLeftButtonX={false} isRightButtonSave title="표지작성" />
    </div>
  );
}

export default Upload;
