import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UploadHeader from '../../components/common/UploadHeader';
import DayButton from '../../components/UploadDay/DayButton';
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
      </main>
    </div>
  );
}

export default UploadDay;
