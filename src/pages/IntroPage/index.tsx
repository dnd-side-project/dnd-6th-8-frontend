import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import FirstPage from '../../components/IntroPage/FirstPage';
import SecondPage from '../../components/IntroPage/SecondPage';
import './style.scss';

function IntroPage() {
  SwiperCore.use([Pagination]);
  return (
    <div className="intropage-wrapper">
      <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
        <SwiperSlide>
          <FirstPage />
        </SwiperSlide>
        <SwiperSlide>
          <SecondPage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default IntroPage;
