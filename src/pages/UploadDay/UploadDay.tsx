import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import DayButton from '../../components/UploadDay/DayButton';
import WeatherButton from '../../components/UploadDay/WeatherButton';
import UploadDayQuestion from '../../components/UploadDay/UploadDayQuestion';
import UploadDayTextArea from '../../components/UploadDay/UploadDayTextArea';
import UploadPlace from '../../components/UploadDay/UploadPlace';
import './UploadDay.scss';
import EmotionModal from '../../components/UploadModals/EmotionModal';
import ShareModal from '../../components/UploadModals/ShareModal';
import UploadAlert from '../../components/UploadModals/UploadAlert';
import {
  addDay,
  deleteDay,
  uploadImage,
  deleteImage,
  changeLocation,
  modifyLocation,
  writing,
  postDay,
  inputDate,
  inputWeather,
} from '../../modules/post/days';
import { RootState } from '../../modules';

// type WriteDataType = {
//   day: number;
//   date: string;
//   weather: string;
//   images: File[];
//   location: { id: number; start: string; time: string; transportation: string; end: string }[];
//   diary: string;
//   feeling: string;
//   tip: string;
// };

function UploadDay() {
  const navigate = useNavigate();
  const dayRef = useRef<HTMLElement>(null);

  const archiveId = useSelector((state: RootState) => state.wallpaper.data.id);
  const days = useSelector((state: RootState) => state.days.data);
  const dispatch = useDispatch();

  // const [writeData, setWriteData] = useState<WriteDataType[]>([
  //   {
  //     day: 1, // Day
  //     date: '', // 날짜
  //     weather: '', // 날씨
  //     images: [], // 이미지 배열
  //     location: [{ id: 1, start: '', time: '', transportation: '', end: '' }], // 장소 경로
  //     diary: '', // 여정
  //     feeling: '', // 감정
  //     tip: '', // 팁
  //   },
  // ]);
  const [selectedDay, setSelectedDay] = useState<number>(1); // 현재 선택된 Day
  const [searchParams, setSearchParams] = useSearchParams();

  // const params: string | null = searchParams.get('day');
  // let day = 0;
  // if (params) {
  //   day = parseInt(params, 10);
  // }

  const onChangeDay = (clickDay: number) => {
    setSelectedDay(clickDay);
    setSearchParams({ day: clickDay.toString() });
  };

  const onAddDay = () => {
    dispatch(addDay());
    // setWriteData(
    //   writeData.concat({
    //     day: writeData.length + 1,
    //     date: '',
    //     weather: '',
    //     images: [],
    //     location: [{ id: 1, start: '', time: '', transportation: '', end: '' }],
    //     diary: '',
    //     feeling: '',
    //     tip: '',
    //   }),
    // );
    setSelectedDay(days.length);
    setSearchParams({ day: days.length.toString() });
  };

  const onDeleteDay = (removeDay: number) => {
    // setWriteData(
    //   writeData
    //     .filter((data) => data.day !== deleteDay)
    //     .map((data) => {
    //       if (data.day > deleteDay) return { ...data, day: data.day - 1 };
    //       return data;
    //     }),
    // );
    dispatch(deleteDay(removeDay));
    if (removeDay === 1) {
      setSelectedDay(1);
      setSearchParams({ day: '1' });
    } else {
      setSelectedDay(removeDay - 1);
      setSearchParams({ day: (removeDay - 1).toString() });
    }
  };

  // input받는 함수 하나로 합치기
  const onInputDate = (e: React.ChangeEvent<HTMLInputElement>, nowDay: number) => {
    dispatch(inputDate(nowDay - 1, e.target.value));
    // setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, date: e.target.value } : data)));
  };

  const onInputStartLoc = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      dispatch(changeLocation(nowDay - 1, 'departure', e.target.value, id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].start = e.target.value;
      //   }),
      // );
    },
    [dispatch],
  );

  const onInputEndLoc = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      dispatch(changeLocation(nowDay - 1, 'arrival', e.target.value, id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].end = e.target.value;
      //   }),
      // );
    },
    [dispatch],
  );

  const onResetStartLoc = useCallback(
    (nowDay: number, id: number) => {
      dispatch(changeLocation(nowDay - 1, 'departure', '', id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].start = '';
      //   }),
      // );
    },
    [dispatch],
  );

  const onResetEndLoc = useCallback(
    (nowDay: number, id: number) => {
      dispatch(changeLocation(nowDay - 1, 'arrival', '', id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].end = '';
      //   }),
      // );
    },
    [dispatch],
  );

  const onInputTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, id: number) => {
      dispatch(changeLocation(nowDay - 1, 'travelTime', e.target.value, id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].time = e.target.value;
      //   }),
      // );
    },
    [dispatch],
  );

  const onChangeTranport = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number, id: number) => {
      const newTransport = e.currentTarget.children[0].getAttribute('alt');
      if (newTransport) dispatch(changeLocation(nowDay - 1, 'transportation', newTransport, id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location[id - 1].transportation = newTransport;
      //   }),
      // );
    },
    [dispatch],
  );

  const onAddLocation = useCallback(
    (nowDay: number, id: number) => {
      dispatch(modifyLocation(nowDay - 1, 'add', id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) nowData.location.push({ id: id + 1, start: '', time: '', transportation: '', end: '' });
      //   }),
      // );
    },
    [dispatch],
  );

  const onDeleteLocation = useCallback(
    (nowDay: number, id: number) => {
      dispatch(modifyLocation(nowDay - 1, 'delete', id));
      // setWriteData(
      //   produce(writeData, (draft) => {
      //     const nowData = draft.find((data) => data.day === nowDay);
      //     if (nowData) {
      //       nowData.location.splice(id - 1, 1); // 삭제
      //       if (id === 2 && nowData.location.length > 1) nowData.location[1].id = 2; // 3번 id 2번으로 변경
      //     }
      //   }),
      // );
    },
    [dispatch],
  );

  const onInputImages = (e: React.ChangeEvent<HTMLInputElement>, nowDay: number) => {
    // console.log(e.target.files);
    if (!e.target.files) return;
    const files: File[] = [];
    for (let i = 0; i < e.target.files.length; i += 1) {
      if (i > 2) break;
      if (e.target.files[i].size >= 1024 * 1024 * 5) {
        setIsImageAlertOpen(true);
        setTimeout(() => {
          setIsImageAlertOpen(false);
        }, 1200);
      } else {
        files.push(e.target.files[i]);
      }
    }
    dispatch(uploadImage(nowDay, files));
    // setWriteData(
    //   writeData.map((data) => (data.day === nowDay ? { ...data, images: data.images.concat(files) } : data)),
    // );
  };

  const onDeleteImages = (nowDay: number, image: File) => {
    dispatch(deleteImage(nowDay, image));
    // setWriteData(
    //   writeData.map((data) =>
    //     data.day === day ? { ...data, images: data.images.filter((img) => img !== image) } : data,
    //   ),
    // );
  };

  const onInputWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number) => {
    const newWeather = e.currentTarget.children[0].getAttribute('alt');
    if (newWeather) {
      dispatch(inputWeather(nowDay - 1, newWeather));
      // setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, weather: newWeather } : data)));
    }
  };

  const onInputDiary = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    dispatch(writing(nowDay, 'travelDescription', e.target.value));
    // setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, diary: e.target.value } : data)));
  };

  const onInputFeeling = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    dispatch(writing(nowDay, 'emotionDescription', e.target.value));
    // setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, feeling: e.target.value } : data)));
  };

  const onInputTip = (e: React.ChangeEvent<HTMLTextAreaElement>, nowDay: number) => {
    dispatch(writing(nowDay, 'tipDescription', e.target.value));
    // setWriteData(writeData.map((data) => (data.day === nowDay ? { ...data, tip: e.target.value } : data)));
  };

  // 작성 완료
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    setComplete(true);
    for (let i = 0; i < days.length; i += 1) {
      if (!days[i].date || !days[i].weather || !days[i].travelDescription || !days[i].emotionDescription) {
        setComplete(false);
        break;
      }
    }
  }, [days]);

  const [isStickerModalOpen, setIsStickerModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);
  const [isLocationAlertOpen, setIsLocationAlertOpen] = useState<boolean>(false);
  const [isImageAlertOpen, setIsImageAlertOpen] = useState<boolean>(false);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (!isShareModalOpen) {
      setIsSaveModalOpen(true);
      setTimeout(() => {
        setIsSaveModalOpen(false);
        // navigate('/archiving');
      }, 1200);
    }
  }, [isShareModalOpen]);

  return (
    <div className="uploadDay-wrapper">
      <main>
        <section className="selected-day-container" ref={dayRef}>
          {days.map((data) => (
            <DayButton
              day={data.dayNumber}
              changeDay={onChangeDay}
              selectedDay={selectedDay}
              deleteDay={onDeleteDay}
              dayLength={days.length}
              key={data.dayNumber}
            />
          ))}
          {days.length < 30 && (
            <button type="button" className="day-plus-button" onClick={onAddDay}>
              <img src="imgs/Upload/ic_plus_circle_upload.png" alt="Day Plus" />
            </button>
          )}
        </section>
        <section className="question-container">
          <article className="question date">
            <UploadDayQuestion text="기록할 하루의 날짜를 입력해주세요." necessary />
            <input
              type="text"
              placeholder="YYYY/MM/DD"
              className={days[selectedDay - 1].date ? 'input' : ''}
              onChange={(e) => onInputDate(e, selectedDay)}
              // value={writeData[day - 1].date}
            />
          </article>
          <article className="question weather">
            <UploadDayQuestion text="그날 여행의 날씨는 어땠나요?" necessary />
            <div className="weather-container">
              <WeatherButton onInputWeather={onInputWeather} selectedDay={selectedDay} alt="sun" />
              <WeatherButton onInputWeather={onInputWeather} selectedDay={selectedDay} alt="cloud" />
              <WeatherButton onInputWeather={onInputWeather} selectedDay={selectedDay} alt="rain" />
              <WeatherButton onInputWeather={onInputWeather} selectedDay={selectedDay} alt="snow" />
              {/* <button
                type="button"
                onClick={(e) => onInputWeather(e, selectedDay)}
                className={days[selectedDay - 1].weather === 'sun' ? 'selected' : ''}
              >
                <img src="imgs/Upload/illust_sun.png" alt="sun" />
                <span>맑음</span>
              </button> */}
            </div>
          </article>
          <article className="question images">
            <UploadDayQuestion text="여행에서 남긴 사진을 업로드해주세요." subtext="(3장선택)" />
            <div className="images-container">
              <div>
                <label htmlFor="upload">
                  <img src="imgs/Upload/ic_camera.png" alt="camera" />
                  <div>
                    <span>{days[selectedDay - 1].images.length}</span>
                    <span>/3</span>
                  </div>
                </label>
              </div>
              <input
                type="file"
                accept="image/x-png,image/jpeg,image/gif"
                onChange={(e) => onInputImages(e, selectedDay)}
                multiple
                id="upload"
                disabled={days[selectedDay - 1].images.length >= 3 && true}
              />
              {days[selectedDay - 1].images.map((image) => {
                const src = URL.createObjectURL(image);
                return (
                  <div key={image.name} className="image">
                    <img src={src} alt="upload_img" />
                    <button type="button" onClick={() => onDeleteImages(selectedDay, image)}>
                      <img src="imgs/Upload/ic_x_circle_full.png" alt="delete" />
                    </button>
                  </div>
                );
              })}
            </div>
          </article>
          <article className="question location">
            <UploadDayQuestion text="여행에서 다녀온 장소를 기록해보세요." subtext="(최대 3개)" />
            {days[selectedDay - 1].dayInfoSaveRequestDtos.map((loc, idx) => (
              <UploadPlace
                onInputStart={onInputStartLoc}
                day={selectedDay}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                nowLocation={loc}
                id={idx}
                onInputEnd={onInputEndLoc}
                onInputTime={onInputTime}
                onChangeTranport={onChangeTranport}
                onDeleteLocation={onDeleteLocation}
                onResetStartLoc={onResetStartLoc}
                onResetEndLoc={onResetEndLoc}
              />
            ))}
            {days[selectedDay - 1].dayInfoSaveRequestDtos.length < 3 && (
              <button
                type="button"
                className="plus-button"
                onClick={() => {
                  onAddLocation(selectedDay, days[selectedDay - 1].dayInfoSaveRequestDtos.length);
                  // if (days[selectedDay - 1].dayInfoSaveRequestDtos.length === 3) {
                  //   setIsLocationAlertOpen(true);
                  //   setTimeout(() => {
                  //     setIsLocationAlertOpen(false);
                  //   }, 1200);
                  // } else {
                  //   onAddLocation(selectedDay, days[selectedDay - 1].dayInfoSaveRequestDtos.length);
                  // }
                }}
              >
                <img src="imgs/Upload/ic_plus_circle_route.png" alt="plus" />
                <span>장소 경로 추가하기</span>
              </button>
            )}
          </article>
          <article className="question">
            <UploadDayQuestion text="하루의 여정을 상세히 기록해보세요." necessary />
            <UploadDayTextArea
              long
              onInput={onInputDiary}
              day={selectedDay}
              value={days[selectedDay - 1].travelDescription}
            />
          </article>
          <article className="question">
            <UploadDayQuestion text="느꼈던 감정을 상세히 기록해보세요." necessary />
            <UploadDayTextArea
              onInput={onInputFeeling}
              day={selectedDay}
              value={days[selectedDay - 1].emotionDescription}
            />
          </article>
          <article className="question">
            <UploadDayQuestion text="여행 꿀팁을 공유해주세요." emoji subtext="(숙소, 맛집 등)" />
            <UploadDayTextArea onInput={onInputTip} day={selectedDay} value={days[selectedDay - 1].tipDescription} />
          </article>
        </section>
      </main>
      <button
        type="button"
        className={`bottomButton-wrapper${complete ? ' complete' : ''}`}
        disabled={!complete}
        onClick={() => setIsStickerModalOpen(true)}
      >
        업로드
      </button>
      {isStickerModalOpen && <EmotionModal closeModal={setIsStickerModalOpen} openModal={setIsShareModalOpen} />}
      {isShareModalOpen && <ShareModal closeModal={setIsShareModalOpen} />}
      {isSaveModalOpen && <UploadAlert text={`여행기록이 성공적으로\n업로드되었습니다!`} emoji="uploadfile" />}
      {isLocationAlertOpen && <UploadAlert text={`최대로 저장 가능한 경로는\n3개 입니다.`} emoji="warning" />}
      {isImageAlertOpen && <UploadAlert text={`사진 용량은 5mb가 넘을 시\n업로드가 불가합니다.`} emoji="crying" />}
    </div>
  );
}

export default UploadDay;
