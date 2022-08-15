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
          // pagination={{
          //   clickable: true,
          //   // bulletClass: `intro-swiper-pagination-bullet`,
          //   // bulletActiveClass: `intro-swiper-pagination-bullet-active`,
          // }}
          onSlideChange={(swiper) => setTimeout(() => setActiveIndex(swiper.activeIndex), 500)}
        >
          <SwiperSlide>
            <FirstPage activeIndex={activeIndex} />
          </SwiperSlide>
          <SwiperSlide>
            <SecondPage sec={36000000000000000} activeIndex={activeIndex} />
          </SwiperSlide>
        </Swiper>
      ) : (
        <SecondPage sec={3000} activeIndex={activeIndex} />
      )}
    </div>
  );
}

export default IntroPage;
