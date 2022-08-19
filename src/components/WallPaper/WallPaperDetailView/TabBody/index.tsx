/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import LocPin from '../../../../assets/icons/WallPaper/dayfeed/ic_location_purple 1.png';
import './style.scss';
import { RootState } from '../../../../modules';
import { daysObjectiveResponseDtoType } from '../../../../constants';
import { weatherSelector } from '../../../../constants/weatherSelector';
import { translatorSelector } from '../../../../constants/transportationSelector';
import Clock from '../../../../assets/icons/WallPaper/clock.png';
import getDate from '../../../../constants/getDate';

type TabBodyProps = {
  index: number;
};

function TabBody({ index }: TabBodyProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { data } = useSelector((state: RootState) => state.dayFeed);
  const [weather, setWeather] = useState('');
  const [date, setDate] = useState(data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.date);
  SwiperCore.use([Pagination]);
  return (
    <div className="tabbody-wrapper">
      <div className="date-weather">
        <p className="body-date">{`${date.split('-')[0]}.${date.split('-')[1]}.${date.split('-')[2]} (${getDate(
          date,
        )})`}</p>
        <div>
          <img
            src={weatherSelector(data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.weather)}
            alt="날씨"
          />
          <p>{data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.weather}</p>
        </div>
      </div>

      <div className="carousel-wrapper">
        {data.daysObjAndSubResponseDto[index].imgUrl.map((url: string) => {
          return <img className="day-img" src={url} alt="이미지캐루셀" width="150px" height="150px" />;
        })}
      </div>
      <div className="content-wrapper">
        <Swiper
          slidesPerView={1}
          style={{ overflow: 'visible' }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {data.daysObjAndSubResponseDto[index].daysObjectiveResponses.map((course: daysObjectiveResponseDtoType) => (
            <SwiperSlide>
              <div className="start-finish-wrapper">
                <div className="start-finish-line">
                  <img src={LocPin} alt="LocPin" style={{ display: 'block' }} /> <p className="gray-letter">출발지</p>
                  <p className="black-letter">{course.departure}</p>
                </div>
                <div className="start-finish-middle">
                  <div className="start-finish-middle-line">
                    <p className="gray-letter">걸린 시간</p>
                    <p className="arrive-time">
                      <img src={Clock} alt="clock" />
                      <p>{course.travelTime}</p>
                    </p>
                  </div>
                  <div className="start-finish-middle-line">
                    <p className="gray-letter">이동 수단</p>
                    <p className="arrive-time">
                      <img src={translatorSelector(course.transportation)} alt="이동수단" />
                      <p>{course.transportation}</p>
                    </p>
                  </div>
                </div>
                <div className="start-finish-line">
                  <img src={LocPin} alt="LocPin" style={{ display: 'block' }} /> <p className="gray-letter">도착지</p>
                  <p className="black-letter">{course.arrival}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="circle-wrapper">
          {data.daysObjAndSubResponseDto[index].daysObjectiveResponses.map(
            (course: daysObjectiveResponseDtoType, idx: number) => {
              console.log('ac', activeIndex);
              if (activeIndex === idx) return <div className="active-circle" />;
              return <div className="non-active-circle" />;
            },
          )}
        </div>
        <div className="today-wrapper">
          <p>
            <div className="today-line" />
            하루의 여정
          </p>
          <div className="archiving-wrapper">
            {data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.travelDescription}
          </div>
        </div>
        <div className="today-wrapper">
          <p>
            <div className="today-line" /> 하루의 감정
          </p>
          <div className="archiving-wrapper">
            {data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.emotionDescription}
          </div>
        </div>
        <div className="today-wrapper">
          <p>
            <div className="today-line" />
            여행 꿀팁
          </p>
          <div className="archiving-wrapper">
            {data.daysObjAndSubResponseDto[index].daysSubjectiveResponseDto.tipDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabBody;
