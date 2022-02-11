import React from 'react';
import './Upload.scss';
import Header from '../../components/UploadPage/Header';

function Upload() {
  return (
    <div className="upload-wrapper">
      <Header isLeftButtonX={false} isRightButtonSave title="표지작성" />
      <main>
        <div className="notice">
          <img src="imgs/UploadPage/emoji_light_archiving.png" alt="light" />
          아래의 정보는 <span>필수</span>로 작성해주세요.
        </div>
      </main>
    </div>
  );
}

export default Upload;
