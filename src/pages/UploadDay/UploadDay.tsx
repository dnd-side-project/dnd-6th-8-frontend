import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UploadHeader from '../../components/common/UploadHeader';
import DayButton from '../../components/UploadDay/DayButton';
import UploadDayQuestion from '../../components/UploadDay/UploadDayQuestion';
import UploadDayTextArea from '../../components/UploadDay/UploadDayTextArea';
import './UploadDay.scss';

type WriteDataType = {
  day: number;
  date: string;
  weather: string;
  images?: File[];
  location?: string[];
  diary: string;
  feeling: string;
  tip: string;
};

function UploadDay() {
  const [writeData, setWriteData] = useState<WriteDataType[]>([
    {
      day: 1,
      date: '',
      weather: '',
      diary: '',
      feeling: '',
      tip: '',
    },
  ]);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const params: string | null = searchParams.get('day');
  let day = 0;
  if (params) {
    day = parseInt(params, 10);
  }

  const onChangeDay = (clickDay: number) => {
    setSelectedDay(clickDay);
    setSearchParams({ day: clickDay.toString() });
  };

  const onAddDay = () => {
    setWriteData(
      writeData.concat({
        day: writeData.length + 1,
        date: '',
        weather: '',
        diary: '',
        feeling: '',
        tip: '',
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
    setSelectedDay(deleteDay - 1);
    setSearchParams({ day: (deleteDay - 1).toString() });
  };

  const onInputDate = (e: React.ChangeEvent<HTMLInputElement>, nowDay: number) => {
    setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, date: e.target.value } : data)));
  };

  const onInputWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number) => {
    const newWeather = e.currentTarget.children[0].getAttribute('alt');
    if (newWeather) {
      setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, weather: newWeather } : data)));
    }
  };

  const onInputDiary = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, diary: e.target.value } : data)));
  };

  const onInputFeeling = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, feeling: e.target.value } : data)));
  };

  const onInputTip = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, tip: e.target.value } : data)));
  };

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
          <article className="question one">
            <UploadDayQuestion text="기록할 하루의 날짜를 입력해주세요." necessary />
            <input
              type="text"
              placeholder="YYYY/MM/DD"
              className={writeData[day - 1].date ? 'input' : ''}
              onChange={(e) => onInputDate(e, day)}
              value={writeData[day - 1].date}
            />
          </article>
          <article className="question two">
            <UploadDayQuestion text="그날 여행의 날씨는 어땠나요?" necessary />
            <div className="weather-container">
              <button
                type="button"
                onClick={(e) => onInputWeather(e, day)}
                className={writeData[day - 1].weather === 'sun' ? 'selected' : ''}
              >
                <img src="imgs/Upload/illust_sun.png" alt="sun" />
                <span>맑음</span>
              </button>
              <button
                type="button"
                onClick={(e) => onInputWeather(e, day)}
                className={writeData[day - 1].weather === 'cloud' ? 'selected' : ''}
              >
                <img src="imgs/Upload/illust_cloud.png" alt="cloud" />
                <span>흐림</span>
              </button>
              <button
                type="button"
                onClick={(e) => onInputWeather(e, day)}
                className={writeData[day - 1].weather === 'rain' ? 'selected' : ''}
              >
                <img src="imgs/Upload/illust_rain.png" alt="rain" />
                <span>비</span>
              </button>
              <button
                type="button"
                onClick={(e) => onInputWeather(e, day)}
                className={writeData[day - 1].weather === 'snow' ? 'selected' : ''}
              >
                <img src="imgs/Upload/illust_snow.png" alt="snow" />
                <span>눈</span>
              </button>
            </div>
          </article>
          <article className="question">
            <UploadDayQuestion text="여행에서 남긴 사진을 업로드해주세요." subtext="(3장선택)" />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행에서 다녀온 장소를 기록해보세요." subtext="(최대 3개)" />
          </article>
          <article className="question">
            <UploadDayQuestion text="하루의 여정을 상세히 기록해보세요." necessary />
            <UploadDayTextArea long onInput={onInputDiary} day={day} value={writeData[day - 1].diary} />
          </article>
          <article className="question">
            <UploadDayQuestion text="느꼈던 감정을 상세히 기록해보세요." necessary />
            <UploadDayTextArea onInput={onInputFeeling} day={day} value={writeData[day - 1].feeling} />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행 꿀팁을 공유해주세요." emoji subtext="(숙소, 맛집 등)" />
            <UploadDayTextArea onInput={onInputTip} day={day} value={writeData[day - 1].tip} />
          </article>
        </section>
      </main>
    </div>
  );
}

export default UploadDay;
