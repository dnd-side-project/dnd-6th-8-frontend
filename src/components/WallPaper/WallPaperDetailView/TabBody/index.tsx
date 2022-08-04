/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import LocPin from '../../../../assets/icons/WallPaper/dayfeed/ic_location_purple 1.png';
import './style.scss';
import { RootState } from '../../../../modules';

type TabBodyProps = {
  index: number;
};

function TabBody({ index }: TabBodyProps) {
  const [imgClick, setImgClick] = useState(true);
  const {data} = useSelector(
    (state: RootState) => state.dayFeed,
  );
  SwiperCore.use([Pagination]);
  return (
    <div className="tabbody-wrapper">
      <div className="date-weather">
        <p className="body-date">{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.date}</p>
        <div>{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.weather}</div>
      </div>

      <div className="carousel-wrapper">
        <Swiper spaceBetween={150} slidesPerView={3}>
          {data.daysObjAndSubResponseDto[index].imgUrl.map((url : string) => {
            return (
              <SwiperSlide>
                <img className="day-img" src={url} alt="이미지캐루셀" width="150px" height="150px" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="content-wrapper">
        {/* <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          style={{ overflow: 'visible' }}
        >
          {value.dayCourse.map((course: dayTripCourse) => (
            <SwiperSlide>
              <div className="start-finish-wrapper">
                <div className="start-finish-line">
                  <img src={LocPin} alt="LocPin" style={{ display: 'block' }} /> <p className="gray-letter">출발지</p>
                  <p className="black-letter">{course.start}</p>
                </div>
                <div className="start-finish-middle">
                  <div className="start-finish-middle-line">
                    <p className="gray-letter">걸린 시간</p>
                    <p className="arrive-time">{course.arriveTime}분</p>
                  </div>
                  <div className="start-finish-middle-line">
                    <p className="gray-letter">이동 수단</p>
                    <p className="arrive-time">{course.goingBy}</p>
                  </div>
                </div>
                <div className="start-finish-line">
                  <img src={LocPin} alt="LocPin" style={{ display: 'block' }} /> <p className="gray-letter">도착지</p>
                  <p className="black-letter">{course.finish}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="today-wrapper">
          <p>
            <div className="today-line" />
            하루의 여정
          </p>
          <div className="archiving-wrapper">{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.travelDescription}</div>
        </div>
        <div className="today-wrapper">
          <p>
            <div className="today-line" /> 하루의 감정
          </p>
          <div className="archiving-wrapper">{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.emotionDescription}</div>
        </div>
        <div className="today-wrapper">
          <p>
            <div className="today-line" />
            여행 꿀팁
          </p>
          <div className="archiving-wrapper">{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.tipDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default TabBody;
