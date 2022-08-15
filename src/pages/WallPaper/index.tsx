/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'use-swiper/lib/swiper.min.css';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
      <WallPaperHeader />
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
