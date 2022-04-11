import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './UploadWallPaper.scss';
import { changeTitle, deleteImage, uploadImage, resetTitle, changeToggle } from '../../modules/post/wallpaper';
import UploadQuestion from '../../components/UploadWallPaper/UploadWallPaperQuestion';
import UploadToggle from '../../components/UploadWallPaper/UploadWallPaperToggle';
import DateModal from '../../components/UploadModals/DateModal';
import UploadAlert from '../../components/UploadModals/UploadAlert';
import { RootState } from '../../modules';

function UploadWallPaper() {
  const wallpaper = useSelector((state: RootState) => state.wallpaper.data);
  const dispatch = useDispatch();

  // 1번 질문 : 커버사진
  const [isImageSizeOK, setIsImageSizeOK] = useState<boolean>(true);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      if (e.target.files[0].size > 1024 * 1024 * 5) {
        setIsImageSizeOK(false);
        setTimeout(() => {
          setIsImageSizeOK(true);
        }, 1200);
        return;
      }
      dispatch(uploadImage(e.target.files[0]));
    },
    [dispatch],
  );

  const onDeleteImage = useCallback(() => dispatch(deleteImage()), [dispatch]);

  // 2번 질문 : 제목
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputText = useCallback((e) => dispatch(changeTitle(e)), [dispatch]);

  const onResetText = useCallback(() => dispatch(resetTitle()), [dispatch]);

  // 3~7번 질문 : 여행장소, 여행기간, 동행여부, 예산계획, 스타일
  const onClickToggle = useCallback(
    (name: string, value: string | boolean) => dispatch(changeToggle(name, value)),
    [dispatch],
  );

  // 작성 완료 확인
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    if (
      wallpaper.archivingStyle !== '' &&
      wallpaper.budget !== '' &&
      wallpaper.coverPicture !== null &&
      wallpaper.firstDay !== '' &&
      wallpaper.haveCompanion !== null &&
      wallpaper.lastDay !== '' &&
      wallpaper.place !== '' &&
      wallpaper.title !== ''
    ) {
      setComplete(true);
    }
  }, [wallpaper]);

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
                <span>{wallpaper.coverPicture !== null ? 1 : 0}</span>
                <span>/1</span>
              </div>
            </label>
            <input
              type="file"
              accept="image/x-png,image/jpeg,image/gif"
              multiple={false}
              onChange={(e) => onUploadImage(e)}
              id="upload"
              disabled={wallpaper.coverPicture !== null}
            />
            {wallpaper.coverPicture && (
              <div className="image">
                <img src={URL.createObjectURL(wallpaper.coverPicture)} alt="upload_img" />
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
            {wallpaper.title !== '' && (
              <button type="button" onClick={onResetText}>
                <img src="imgs/Upload/ic_x_small.png" alt="reset" />
              </button>
            )}
          </div>
        </div>
        <div className="three question">
          <UploadQuestion number={3} title="여행 장소를 입력해주세요." />
          <div className="toggle">
            <UploadToggle text="부산" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="제주도" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="강릉/속초" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
          </div>
          <div className="toggle">
            <UploadToggle text="여수" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="유럽" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
            <UploadToggle text="휴양지" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
          </div>
          <div className="toggle">
            <UploadToggle text="미국" selected={wallpaper.place} setSelected={onClickToggle} type="place" />
            <UploadToggle
              text="그외(직접입력)"
              selected={wallpaper.place}
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
            selected={wallpaper.haveCompanion}
            setSelected={onClickToggle}
            type="haveCompanion"
            value="false"
          />
          <UploadToggle
            text="동행과의 여행"
            selected={wallpaper.haveCompanion}
            setSelected={onClickToggle}
            type="haveCompanion"
            value="true"
          />
        </div>
        <div className="six question">
          <UploadQuestion number={6} title="예산 계획에 대해 알려주세요." />
          <UploadToggle
            text="최소한으로 준비"
            selected={wallpaper.budget}
            setSelected={onClickToggle}
            type="budget"
            value="최소한"
          />
          <UploadToggle
            text="넉넉하게 준비"
            selected={wallpaper.budget}
            setSelected={onClickToggle}
            type="budget"
            value="넉넉"
          />
        </div>
        <div className="seven question">
          <UploadQuestion number={7} title="해당 기록의 스타일을 선택해주세요." />
          <UploadToggle
            text="감성 아카이빙"
            selected={wallpaper.archivingStyle}
            setSelected={onClickToggle}
            type="archivingStyle"
            value="감성"
          />
          <UploadToggle
            text="정보 아카이빙"
            selected={wallpaper.archivingStyle}
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
