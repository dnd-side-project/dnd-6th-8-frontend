/* eslint-disable react/jsx-key */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DayFeedDataType } from '../../../../constants';
import './style.scss';

type TabBodyProps = {
  value: DayFeedDataType;
};

function TabBody({ value }: TabBodyProps) {
  return (
    <div className="tabbody-wrapper">
      <p>{value.date}</p>
      <Swiper spaceBetween={140} slidesPerView={value.imgs.length}  >
        {value.imgs.map((img, index) => {
          return (
            <SwiperSlide>
              <img src={img} alt="이미지캐루셀" width='150px' height='150px'/>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  );
}

export default TabBody;
