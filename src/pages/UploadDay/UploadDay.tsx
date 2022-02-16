import React, { useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import produce from 'immer';
import UploadHeader from '../../components/common/UploadHeader';
import DayButton from '../../components/UploadDay/DayButton';
import UploadDayQuestion from '../../components/UploadDay/UploadDayQuestion';
import UploadDayTextArea from '../../components/UploadDay/UploadDayTextArea';
import UploadPlace from '../../components/UploadDay/UploadPlace';
import ButtonModal from '../../components/UploadModals/ButtonModal';
import './UploadDay.scss';

type WriteDataType = {
  day: number;
  date: string;
  weather: string;
  images: File[];
  location: { id: number; start: string; time: string; transportation: string; end: string }[];
  diary: string;
  feeling: string;
  tip: string;
};

function UploadDay() {
  const [writeData, setWriteData] = useState<WriteDataType[]>([
    {
      day: 1, // Day
      date: '', // 날짜
      weather: '', // 날씨
      images: [], // 이미지 배열
      location: [{ id: 1, start: '', time: '', transportation: '', end: '' }], // 장소 경로
      diary: '', // 여정
      feeling: '', // 감정
      tip: '', // 팁
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
        images: [],
        location: [{ id: 1, start: '', time: '', transportation: '', end: '' }],
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

  // input받는 함수 하나로 합치기
  const onInputDate = (e: React.ChangeEvent<HTMLInputElement>, nowDay: number) => {
    setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, date: e.target.value } : data)));
  };

  const onInputStartLoc = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      setWriteData(
        produce(writeData, (draft) => {
          const nowData = draft.find((data) => data.day === nowDay);
          if (nowData) nowData.location[id - 1].start = e.target.value;
        }),
      );
    },
    [writeData],
  );

  const onInputEndLoc = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      setWriteData(
        produce(writeData, (draft) => {
          const nowData = draft.find((data) => data.day === nowDay);
          if (nowData) nowData.location[id - 1].end = e.target.value;
        }),
      );
    },
    [writeData],
  );

  const onInputTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      setWriteData(
        produce(writeData, (draft) => {
          const nowData = draft.find((data) => data.day === nowDay);
          if (nowData) nowData.location[id - 1].time = e.target.value;
        }),
      );
    },
    [writeData],
  );

  const onChangeTranport = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number, id: number) => {
      const newTransport = e.currentTarget.children[0].getAttribute('alt');
      if (newTransport)
        setWriteData(
          produce(writeData, (draft) => {
            const nowData = draft.find((data) => data.day === nowDay);
            if (nowData) nowData.location[id - 1].transportation = newTransport;
          }),
        );
    },
    [writeData],
  );

  const onAddLocation = useCallback(
    (nowDay: number, id: number) => {
      setWriteData(
        produce(writeData, (draft) => {
          const nowData = draft.find((data) => data.day === nowDay);
          if (nowData) nowData.location.push({ id: id + 1, start: '', time: '', transportation: '', end: '' });
        }),
      );
    },
    [writeData],
  );

  const onDeleteLocation = useCallback(
    (nowDay: number, id: number) => {
      setWriteData(
        produce(writeData, (draft) => {
          const nowData = draft.find((data) => data.day === nowDay);
          if (nowData) {
            nowData.location.splice(id - 1, 1); // 삭제
            if (id === 2 && nowData.location.length > 1) nowData.location[1].id = 2; // 3번 id 2번으로 변경
          }
        }),
      );
    },
    [writeData],
  );

  const onInputImages = (e: React.ChangeEvent<HTMLInputElement>, nowDay: number) => {
    // console.log(e.target.files);
    if (!e.target.files) return;
    const files: File[] = [];
    for (let i = 0; i < e.target.files.length; i += 1) {
      if (i > 2) break;
      files.push(e.target.files[i]);
    }
    setWriteData(
      writeData.map((data) => (data.day === nowDay ? { ...data, images: data.images.concat(files) } : data)),
    );
  };

  const onDeleteImages = (image: File) => {
    setWriteData(
      writeData.map((data) =>
        data.day === day ? { ...data, images: data.images.filter((img) => img !== image) } : data,
      ),
    );
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
          <article className="question date">
            <UploadDayQuestion text="기록할 하루의 날짜를 입력해주세요." necessary />
            <input
              type="text"
              placeholder="YYYY/MM/DD"
              className={writeData[day - 1].date ? 'input' : ''}
              onChange={(e) => onInputDate(e, day)}
              value={writeData[day - 1].date}
            />
          </article>
          <article className="question weather">
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
          <article className="question images">
            <UploadDayQuestion text="여행에서 남긴 사진을 업로드해주세요." subtext="(3장선택)" />
            <div className="images-container">
              <div>
                <label htmlFor="upload">
                  <img src="imgs/Upload/ic_camera.png" alt="camera" />
                  <div>
                    <span>{writeData[day - 1].images.length}</span>
                    <span>/3</span>
                  </div>
                </label>
              </div>
              <input
                type="file"
                accept="image/x-png,image/jpeg,image/gif"
                onChange={(e) => onInputImages(e, day)}
                multiple
                id="upload"
                disabled={writeData[day - 1].images.length >= 3 && true}
              />
              {writeData[day - 1].images.map((image) => {
                const src = URL.createObjectURL(image);
                return (
                  <div key={image.name} className="image">
                    <img src={src} alt="upload_img" />
                    <button type="button" onClick={() => onDeleteImages(image)}>
                      <img src="imgs/Upload/ic_x_circle_full.png" alt="delete" />
                    </button>
                  </div>
                );
              })}
            </div>
          </article>
          <article className="question location">
            <UploadDayQuestion text="여행에서 다녀온 장소를 기록해보세요." subtext="(최대 3개)" />
            {writeData[day - 1].location.map((loc) => (
              <UploadPlace
                onInputStart={onInputStartLoc}
                day={day}
                key={loc.id}
                nowLocation={loc}
                onInputEnd={onInputEndLoc}
                onInputTime={onInputTime}
                onChangeTranport={onChangeTranport}
                onDeleteLocation={onDeleteLocation}
              />
            ))}
            <button
              type="button"
              className="plus-button"
              onClick={() => onAddLocation(day, writeData[day - 1].location.length)}
            >
              <img src="imgs/Upload/ic_plus_circle_route.png" alt="plus" />
              <span>장소 경로 추가하기</span>
            </button>
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
      {/* <ButtonModal
        title="나가시겠어요?"
        subTitle={`나가시면 새로 고침된 데이터만\n개인소장 여행 피드에 저장돼요.`}
        rightButton="나가기"
      /> */}
    </div>
  );
}

export default UploadDay;
