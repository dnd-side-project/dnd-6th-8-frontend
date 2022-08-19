/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'use-swiper/lib/swiper.min.css';
import DeleteAgree from '../../components/ArchivingPage/ArchivingCorePage/DeleteAgree';
import DeleteDialog from '../../components/ArchivingPage/ArchivingCorePage/DeleteDialog';
import WallPaperDetailView from '../../components/WallPaper/WallPaperDetailView';
import WallPaperHeader from '../../components/WallPaper/WallPaperHeader';
import WallPaperPreview from '../../components/WallPaper/WallPaperPreview';
import { deleteDayFeed } from '../../modules/post/dayfeed';
import { deleteWallPaper, readWallPaper } from '../../modules/post/readwallpaper';
import './style.scss';

function WallPaper() {
  // 해당 게시물에 대한 id
  const { id } = useParams();
  const dispatch = useDispatch();
  const [deleteClick, setDeleteClick] = useState<boolean>(false);
  const [agreeClick, setAgreeClick] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [deleteId, setDeleteId] = useState<number>(-1);
  useEffect(() => {
    if (id !== undefined) {
      dispatch(readWallPaper(id));
    }
    return () => {
      dispatch(deleteDayFeed());
      dispatch(deleteWallPaper());
    };
  }, [dispatch]);

  return (
    <div className="wallpaper-wrapper">
      {deleteClick && (
        <DeleteDialog
          deleteClick={deleteClick}
          setDeleteClick={setDeleteClick}
          agreeClick={agreeClick}
          setAgreeClick={setAgreeClick}
          deleteId={deleteId}
          setDeleteId={setDeleteId}
        />
      )}
      {agreeClick && <DeleteAgree />}
      <WallPaperHeader setDeleteClick={setDeleteClick} setDeleteId={setDeleteId} />
      {activeIndex === 0 ? (
        <div className="preview">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => setTimeout(() => setActiveIndex(swiper.activeIndex), 500)}
          >
            <SwiperSlide>
              <WallPaperPreview />
            </SwiperSlide>
            <SwiperSlide>
              <WallPaperDetailView />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="detail">
          <WallPaperDetailView />
        </div>
      )}
    </div>
  );
}

export default WallPaper;
