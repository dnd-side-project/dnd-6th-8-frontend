import React, { useState, useRef } from 'react';
import './UploadWallPaper.scss';
import UploadHeader from '../../components/UploadWallPaper/UploadWallPaperHeader';
import UploadQuestion from '../../components/UploadWallPaper/UploadWallPaperQuestion';
import UploadToggle from '../../components/UploadWallPaper/UploadWallPaperToggle';
import BottomButton from '../../components/common/BottomButton';

function UploadWallPaper() {
  // 1번 질문
  const [selected1, setSelected1] = useState<File | null>(null);
  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files[0]);
    if (!e.target.files) return;
    setSelected1(e.target.files[0]);
  };
  // 2번 질문
  const inputRef = useRef<HTMLInputElement>(null);
  const [selected2, setSelected2] = useState<string>('');
  const onInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected2(e.target.value);
  };
  const resetText = () => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    setSelected2('');
  };

  // 각 질문 당 선택된 버튼의 id 저장
  const [selected3, setSelected3] = useState<number>(0);
  const [selected4, setSelected4] = useState<number>(0);
  const [selected5, setSelected5] = useState<number>(0);
  const [selected6, setSelected6] = useState<number>(0);
  const [selected7, setSelected7] = useState<number>(0);
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
          <label htmlFor="upload">
            <img src="imgs/UploadPage/ic_camera.png" alt="camera" />
            <div>
              <span>{selected1 ? 1 : 0}</span>
              <span>/1</span>
            </div>
          </label>
          <input
            type="file"
            accept="image/x-png,image/jpeg,image/gif"
            multiple={false}
            onChange={(e) => onUploadImage(e)}
            id="upload"
          />
        </div>
        <div className="two question">
          <UploadQuestion number={2} title="제목을 입력해주세요." />
          <div className="inputText">
            <input
              type="text"
              placeholder="이번 여행 기록의 제목을 정해주세요."
              onChange={(e) => onInputText(e)}
              ref={inputRef}
            />
            {selected2 !== '' && (
              <button type="button" onClick={resetText}>
                <img src="imgs/UploadPage/ic_x_small.png" alt="reset" />
              </button>
            )}
          </div>
        </div>
        <div className="three question">
          <UploadQuestion number={3} title="여행 장소를 입력해주세요." />
          <div className="toggle">
            <UploadToggle text="부산" id={1} selected={selected3} setSelected={setSelected3} />
            <UploadToggle text="제주도" id={2} selected={selected3} setSelected={setSelected3} />
            <UploadToggle text="강릉/속초" id={3} selected={selected3} setSelected={setSelected3} />
          </div>
          <div className="toggle">
            <UploadToggle text="여수" id={4} selected={selected3} setSelected={setSelected3} />
            <UploadToggle text="유럽" id={5} selected={selected3} setSelected={setSelected3} />
            <UploadToggle text="휴양지" id={6} selected={selected3} setSelected={setSelected3} />
          </div>
          <div className="toggle">
            <UploadToggle text="미국" id={7} selected={selected3} setSelected={setSelected3} />
            <UploadToggle text="그외 (직접입력)" id={8} selected={selected3} setSelected={setSelected3} />
          </div>
        </div>
        <div className="four question">
          <UploadQuestion number={4} title="여행 기간을 입력해주세요." />
          <div className="date-container">
            <UploadToggle text="YYYY/MM/DD" id={1} selected={selected4} setSelected={setSelected4} />
            <span className="line" />
            <UploadToggle text="YYYY/MM/DD" id={2} selected={selected4} setSelected={setSelected4} />
          </div>
        </div>
        <div className="five question">
          <UploadQuestion number={5} title="동행 여부를 선택해주세요." />
          <UploadToggle text="혼자여행" id={1} selected={selected5} setSelected={setSelected5} />
          <UploadToggle text="동행과의 여행" id={2} selected={selected5} setSelected={setSelected5} />
        </div>
        <div className="six question">
          <UploadQuestion number={6} title="예산 계획에 대해 알려주세요." />
          <UploadToggle text="최소한으로 준비" id={1} selected={selected6} setSelected={setSelected6} />
          <UploadToggle text="넉넉하게 준비" id={2} selected={selected6} setSelected={setSelected6} />
        </div>
        <div className="seven question">
          <UploadQuestion number={7} title="해당 기록의 스타일을 선택해주세요." />
          <UploadToggle text="감성 아카이빙" id={1} selected={selected7} setSelected={setSelected7} />
          <UploadToggle text="정보 아카이빙" id={2} selected={selected7} setSelected={setSelected7} />
        </div>
      </main>
      <footer>
        <BottomButton selected={[selected1, selected2, selected3, selected4, selected5, selected6, selected7]} />
      </footer>
    </div>
  );
}

export default UploadWallPaper;
