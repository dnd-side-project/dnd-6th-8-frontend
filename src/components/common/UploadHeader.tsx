import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postWallpaper, putWallpaper } from '../../modules/post/wallpaper';
import { postDay } from '../../modules/post/days';
import './UploadHeader.scss';
import ButtonModal from '../UploadModals/ButtonModal';
import UploadAlert from '../UploadModals/UploadAlert';
import { RootState } from '../../modules';

type UploadHeaderProps = {
  isCanGoBack: boolean;
  title: string;
};

function UploadHeader({ isCanGoBack, title }: UploadHeaderProps) {
  const [isOpenBackModal, setIsOpenBackModal] = useState<boolean>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const wallpaper = useSelector((state: RootState) => state.wallpaper.data);
  const days = useSelector((state: RootState) => state.days.data);
  const dispatch = useDispatch();
  const onSave = useCallback(() => {
    // Day 작성 페이지
    if (isCanGoBack) {
      days.forEach((day) => {
        if (wallpaper.id) dispatch(postDay(day, wallpaper.id, day.dayNumber));
      });
    }
    // 표지 작성 페이지
    else if (wallpaper.id) dispatch(putWallpaper(wallpaper));
    else dispatch(postWallpaper(wallpaper));
  }, [dispatch, wallpaper, isCanGoBack, days]);

  return (
    <>
      <header className="uploadHeader-wrapper">
        <div className="left">
          {isCanGoBack && (
            <button type="button" className="back" onClick={() => navigate('/upload-wallpaper')}>
              <img src="imgs/Upload/ic_back.png" alt="x" />
            </button>
          )}
          <button type="button" onClick={() => setIsOpenBackModal(true)}>
            나가기
          </button>
        </div>
        <div className="title">{title}</div>
        <button
          type="button"
          className="right select"
          onClick={() => {
            onSave();
            setIsOpenSaveModal(true);
            setTimeout(() => {
              setIsOpenSaveModal(false);
            }, 1200);
          }}
        >
          저장하기
        </button>
      </header>
      {isOpenBackModal && (
        <ButtonModal
          title="나가시겠어요?"
          subTitle={`나가시면 새로 고침된 데이터만\n개인소장 여행 피드에 저장돼요.`}
          rightButton="나가기"
          closeModal={setIsOpenBackModal}
        />
      )}
      {isOpenSaveModal && <UploadAlert text={`여행기록이 성공적으로\n업로드되었습니다!`} emoji="uploadfile" />}
    </>
  );
}

export default UploadHeader;
