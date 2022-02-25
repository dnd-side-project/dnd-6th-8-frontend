/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'use-swiper/lib/swiper.min.css';
import WallPaperDetailView from '../../components/WallPaper/WallPaperDetailView';
import WallPaperHeader from '../../components/WallPaper/WallPaperHeader';
import WallPaperPreview from '../../components/WallPaper/WallPaperPreview';
import { HomeRecFeedData, HomeFeedsType } from '../../constants';
import './style.scss';

function WallPaper() {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState<HomeFeedsType | undefined>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
      HomeRecFeedData.map((value) => {
        if (value.id === Number(id)) {
          return setFetchData(value); 
        }
      }
    );
  }, [HomeRecFeedData]);

  return (
    <div className="wallpaper-wrapper">
      <WallPaperHeader />
      {activeIndex === 0 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setTimeout(() => setActiveIndex(swiper.activeIndex), 500)}
        >
          <SwiperSlide>
            <WallPaperPreview fetchData={fetchData} />
          </SwiperSlide>
          <SwiperSlide>
            <WallPaperDetailView fetchData={fetchData} />
          </SwiperSlide>
        </Swiper>
      ) : (
        <WallPaperDetailView fetchData={fetchData} />
      )}
    </div>
  );
}

export default WallPaper;
