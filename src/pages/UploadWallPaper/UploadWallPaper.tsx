import React from 'react';
import './UploadWallPaper.scss';
import UploadHeader from '../../components/UploadWallPaper/UploadWallPaperHeader';
import UploadQuestion from '../../components/UploadWallPaper/UploadWallPaperQuestion';
import UploadToggle from '../../components/UploadWallPaper/UploadWallPaperToggle';
import BottomButton from '../../components/common/BottomButton';

function UploadWallPaper() {
  return (
    <div className="uploadWallPaper-wrapper">
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
          <div className="toggle">
            <UploadToggle text="부산" />
            <UploadToggle text="제주도" />
            <UploadToggle text="강릉/속초" />
          </div>
          <div className="toggle">
            <UploadToggle text="여수" />
            <UploadToggle text="유럽" />
            <UploadToggle text="휴양지" />
          </div>
          <div className="toggle">
            <UploadToggle text="미국" />
            <UploadToggle text="그외 (직접입력)" />
          </div>
        </div>
        <div className="four question">
          <UploadQuestion number={4} title="여행 기간을 입력해주세요." />
          <div className="date-container">
            <UploadToggle text="YYYY/MM/DD" />
            <span className="line" />
            <UploadToggle text="YYYY/MM/DD" />
          </div>
        </div>
        <div className="five question">
          <UploadQuestion number={5} title="동행 여부를 선택해주세요." />
          <UploadToggle text="혼자여행" />
          <UploadToggle text="동행과의 여행" />
        </div>
        <div className="six question">
          <UploadQuestion number={6} title="예산 계획에 대해 알려주세요." />
          <UploadToggle text="최소한으로 준비" />
          <UploadToggle text="넉넉하게 준비" />
        </div>
        <div className="seven question">
          <UploadQuestion number={7} title="해당 기록의 스타일을 선택해주세요." />
          <UploadToggle text="감성 아카이빙" />
          <UploadToggle text="정보 아카이빙" />
        </div>
      </main>
      <footer>
        <BottomButton />
      </footer>
    </div>
  );
}

export default UploadWallPaper;
