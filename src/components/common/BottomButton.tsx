import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomButton.scss';
import EmotionModal from '../UploadModals/EmotionModal';
import ShareModal from '../UploadModals/ShareModal';

function BottomButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const nowPage = location.pathname;

  const [isStickerModalOpen, setIsStickerModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  const onComplete = () => {
    if (location.pathname === '/upload-wallpaper') {
      navigate('/upload-day?day=1');
    } else {
      setIsStickerModalOpen(true);
    }
  };

  return (
    <>
      <button type="button" onClick={() => navigate('/upload-day?day=1')}>
        {location.pathname === '/upload-wallpaper' ? '다음으로' : '업로드'}
      </button>
      {isStickerModalOpen && <EmotionModal />}
      {isShareModalOpen && <ShareModal />}
    </>
  );
}

export default BottomButton;
