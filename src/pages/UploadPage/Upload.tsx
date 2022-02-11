import React from 'react';
import './Upload.scss';
import UploadHeader from '../../components/UploadPage/UploadHeader';
import UploadQuestion from '../../components/UploadPage/UploadQuestion';

function Upload() {
  return (
    <div className="upload-wrapper">
      <UploadHeader isLeftButtonX={false} isRightButtonSave title="표지작성" />
      <main>
        <div className="notice">
          <img src="imgs/UploadPage/emoji_light_archiving.png" alt="light" />
          아래의 정보는 <span>필수</span>로 작성해주세요.
        </div>
        <div>
          <UploadQuestion number={1} title="커버사진을 업로드해주세요." />
        </div>
      </main>
    </div>
  );
}

export default Upload;
