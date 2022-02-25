import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadWallPaper.scss';
import UploadQuestion from '../../components/UploadWallPaper/UploadWallPaperQuestion';
import UploadToggle from '../../components/UploadWallPaper/UploadWallPaperToggle';
import DateModal from '../../components/UploadModals/DateModal';
import UploadAlert from '../../components/UploadModals/UploadAlert';

type UploadWallPaperDataType = {
  coverImage: File | null;
  title: string;
  place: string;
  firstDay: string;
  lastDay: string;
  haveCompanion: boolean | null;
  budget: string;
  archivingStyle: string;
};

function UploadWallPaper() {
  // 표지작성 데이터
  const [wallPaperData, setWallPaperData] = useState<UploadWallPaperDataType>({
    coverImage: null,
    title: '',
    place: '',
    firstDay: '',
    lastDay: '',
    haveCompanion: null,
    budget: '',
    archivingStyle: '',
  });

  const [isImageSizeOK, setIsImageSizeOK] = useState<boolean>(true);

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0].size > 1024 * 1024 * 5) {
      setIsImageSizeOK(false);
      setTimeout(() => {
        setIsImageSizeOK(true);
      }, 1200);
      return;
    }
    setWallPaperData({ ...wallPaperData, coverImage: e.target.files[0] });
  };

  const onDeleteImage = () => {
    setWallPaperData({ ...wallPaperData, coverImage: null });
  };

  // 2번 질문
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallPaperData({ ...wallPaperData, title: e.target.value });
  };

  const resetText = () => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    setWallPaperData({ ...wallPaperData, title: '' });
  };

  // 3~7번 질문
  const onClickToggle = (type: string, value: string | boolean) => {
    setWallPaperData({ ...wallPaperData, [type]: value });
  };

  // 작성 완료
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    if (
      wallPaperData.archivingStyle !== '' &&
      wallPaperData.budget !== '' &&
      wallPaperData.coverImage !== null &&
      wallPaperData.firstDay !== '' &&
      wallPaperData.haveCompanion !== null &&
      wallPaperData.lastDay !== '' &&
      wallPaperData.place !== '' &&
      wallPaperData.title !== ''
    ) {
      setComplete(true);
    }
  }, [wallPaperData]);

  const navigate = useNavigate();

  return (
    <div>
      <main className="uploadWallPaper-wrapper">
        <div className="notice">
          <img src="imgs/Upload/emoji_light_archiving.png" alt="light" />
          <span>
            아래의 정보는 <span>필수</span>로 작성해주세요.
          </span>
        </div>
        <div className="one question">
          <UploadQuestion number={1} title="커버사진을 업로드해주세요." />
          <div className="images-container">
            <label htmlFor="upload">
              <img src="imgs/Upload/ic_camera.png" alt="camera" />
              <div>
                <span>{wallPaperData.coverImage !== null ? 1 : 0}</span>
                <span>/1</span>
              </div>
            </label>
            <input
              type="file"
              accept="image/x-png,image/jpeg,image/gif"
              multiple={false}
              onChange={(e) => onUploadImage(e)}
              id="upload"
              disabled={wallPaperData.coverImage !== null}
            />
            {wallPaperData.coverImage && (
              <div className="image">
                <img src={URL.createObjectURL(wallPaperData.coverImage)} alt="upload_img" />
                <button type="button" onClick={() => onDeleteImage()}>
                  <img src="imgs/Upload/ic_x_circle_full.png" alt="delete" />
                </button>
              </div>
            )}
          </div>
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
            {wallPaperData.title !== '' && (
              <button type="button" onClick={resetText}>
                <img src="imgs/Upload/ic_x_small.png" alt="reset" />
              </button>
            )}
          </div>
        </div>
        <div className="three question">
          <UploadQuestion number={3} title="여행 장소를 입력해주세요." />
          <div className="toggle">
            <UploadToggle text="부산" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="제주도" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="강릉/속초" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
          </div>
          <div className="toggle">
            <UploadToggle text="여수" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="유럽" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="휴양지" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
          </div>
          <div className="toggle">
            <UploadToggle text="미국" selected={wallPaperData.place} setSelected={onClickToggle} type="place" />
            <UploadToggle
              text="그외(직접입력)"
              selected={wallPaperData.place}
              setSelected={onClickToggle}
              type="place"
              value="그외"
            />
          </div>
        </div>
        <div className="four question">
          <UploadQuestion number={4} title="여행 기간을 입력해주세요." />
          <DateModal setSelected={onClickToggle} />
        </div>
        <div className="five question">
          <UploadQuestion number={5} title="동행 여부를 선택해주세요." />
          <UploadToggle
            text="혼자여행"
            selected={wallPaperData.haveCompanion}
            setSelected={onClickToggle}
            type="haveCompanion"
            value="혼자"
          />
          <UploadToggle
            text="동행과의 여행"
            selected={wallPaperData.haveCompanion}
            setSelected={onClickToggle}
            type="haveCompanion"
            value="동행"
          />
        </div>
        <div className="six question">
          <UploadQuestion number={6} title="예산 계획에 대해 알려주세요." />
          <UploadToggle
            text="최소한으로 준비"
            selected={wallPaperData.budget}
            setSelected={onClickToggle}
            type="budget"
            value="최소한"
          />
          <UploadToggle
            text="넉넉하게 준비"
            selected={wallPaperData.budget}
            setSelected={onClickToggle}
            type="budget"
            value="넉넉"
          />
        </div>
        <div className="seven question">
          <UploadQuestion number={7} title="해당 기록의 스타일을 선택해주세요." />
          <UploadToggle
            text="감성 아카이빙"
            selected={wallPaperData.archivingStyle}
            setSelected={onClickToggle}
            type="archivingStyle"
            value="감성"
          />
          <UploadToggle
            text="정보 아카이빙"
            selected={wallPaperData.archivingStyle}
            setSelected={onClickToggle}
            type="archivingStyle"
            value="정보"
          />
        </div>
      </main>
      <button
        type="button"
        className={`bottomButton-wrapper${complete ? ' complete' : ''}`}
        disabled={!complete}
        onClick={() => navigate('/upload-day?day=1')}
      >
        다음으로
      </button>
      {!isImageSizeOK && <UploadAlert text={`사진 용량은 5mb가 넘을 시\n업로드가 불가합니다.`} emoji="crying" />}
    </div>
  );
}

export default UploadWallPaper;
