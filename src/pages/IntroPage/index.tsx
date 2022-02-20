import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import FirstPage from '../../components/IntroPage/FirstPage';
import SecondPage from '../../components/IntroPage/SecondPage';
import './style.scss';

function IntroPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  SwiperCore.use([Pagination]);
  return (
    <div className="intropage-wrapper">
      {activeIndex === 0 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setTimeout(() => setActiveIndex(swiper.activeIndex), 500)}
        >
          <SwiperSlide>
            <FirstPage />
          </SwiperSlide>
          <SwiperSlide>
            <SecondPage sec={36000000000000000} />
          </SwiperSlide>
        </Swiper>
      ) : (
        <SecondPage sec={2500} />
      )}
    </div>
  );
}

export default IntroPage;

// const [activeIndex, setActiveIndex] = useState<number>(0);
// {activeIndex === 0 ? (
//   <Swiper
//     spaceBetween={50}
//     slidesPerView={1}
//     onSlideChange={(swiper) => setTimeout(() => setActiveIndex(swiper.activeIndex), 500)}
//   >
//     <SwiperSlide>
//       <WallPaperPreview fetchData={fetchData} />
//     </SwiperSlide>
//     <SwiperSlide>
//       <WallPaperDetailView fetchData={fetchData} />
//     </SwiperSlide>
//   </Swiper>
// ) : (
//   <WallPaperDetailView fetchData={fetchData} />
// )}
