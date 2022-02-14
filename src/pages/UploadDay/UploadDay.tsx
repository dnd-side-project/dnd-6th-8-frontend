import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UploadHeader from '../../components/common/UploadHeader';
import DayButton from '../../components/UploadDay/DayButton';
import UploadDayQuestion from '../../components/UploadDay/UploadDayQuestion';
import './UploadDay.scss';

type WriteDataType = {
  day: number;
  date: string;
  weather: number;
  images?: File[];
  location?: string[];
  diary: string;
  feeling: string;
  tip?: string;
};

function UploadDay() {
  const [writeData, setWriteData] = useState<WriteDataType[]>([
    {
      day: 1,
      date: 'YYYY/MM/DD',
      weather: 0,
      diary: '',
      feeling: '',
    },
  ]);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const day = searchParams.get('day');
  // const data = !day ? writeData[0] : writeData[parseInt(day, 10) - 1];
  const onChangeDay = (clickDay: number) => {
    setSelectedDay(clickDay);
    setSearchParams({ day: clickDay.toString() });
  };

  const onAddDay = () => {
    setWriteData(
      writeData.concat({
        day: writeData.length + 1,
        date: 'YYYY/MM/DD',
        weather: 0,
        diary: '',
        feeling: '',
      }),
    );
    setSelectedDay(writeData.length + 1);
    setSearchParams({ day: (writeData.length + 1).toString() });
  };

  const onDeleteDay = (deleteDay: number) => {
    setWriteData(
      writeData
        .filter((data) => data.day !== deleteDay)
        .map((data) => {
          if (data.day > deleteDay) return { ...data, day: data.day - 1 };
          return data;
        }),
    );
  };

  // const changeData = (nowDay: string) => {
  //   if (nowDay)
  //     setWriteData(
  //       writeData.map((cur, index) => {
  //         if (parseInt(nowDay, 10) - 1 === index) {
  //           return { ...cur, date: 'change!' };
  //         }
  //         return cur;
  //       }),
  //     );
  // };

  return (
    <div className="uploadDay-wrapper">
      <UploadHeader title="기록 작성" isCanGoBack isRightButtonSave />
      <main>
        <section className="selected-day-container">
          {writeData.map((data) => (
            <DayButton
              day={data.day}
              changeDay={onChangeDay}
              selectedDay={selectedDay}
              deleteDay={onDeleteDay}
              dayLength={writeData.length}
              key={data.day}
            />
          ))}
          <button type="button" className="day-plus-button" onClick={onAddDay}>
            <img src="imgs/Upload/ic_plus_circle_upload.png" alt="Day Plus" />
          </button>
        </section>
        <section className="question-container">
          <article className="question">
            <UploadDayQuestion text="기록할 하루의 날짜를 입력해주세요." necessary />
          </article>
          <article className="question">
            <UploadDayQuestion text="그날 여행의 날씨는 어땠나요?" necessary />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행에서 남긴 사진을 업로드해주세요." subtext="(3장선택)" />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행에서 다녀온 장소를 기록해보세요." subtext="(최대 3개)" />
          </article>
          <article className="question">
            <UploadDayQuestion text="하루의 여정을 상세히 기록해보세요." necessary />
          </article>
          <article className="question">
            <UploadDayQuestion text="느꼈던 감정을 상세히 기록해보세요." necessary />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행 꿀팁을 공유해주세요." emoji subtext="(숙소, 맛집 등)" />
          </article>
        </section>
      </main>
    </div>
  );
}

export default UploadDay;
