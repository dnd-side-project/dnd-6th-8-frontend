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
        <div className="one question">
          <UploadQuestion number={1} title="커버사진을 업로드해주세요." />
          <button type="button">
            <img src="imgs/UploadPage/ic_camera.png" alt="camera" />
            <div>
              <span>0</span>
              <span>/1</span>
            </div>
          </button>
        </div>
        <div className="two question">
          <UploadQuestion number={2} title="제목을 입력해주세요." />
          <div className="inputText">
            <input type="text" placeholder="이번 여행 기록의 제목을 정해주세요." />
            <img src="imgs/UploadPage/ic_x_small.png" alt="reset" />
          </div>
        </div>
        <div className="three question">
          <UploadQuestion number={3} title="여행 장소를 입력해주세요." />
        </div>
      </main>
    </div>
  );
}

export default Upload;
