import React, { useRef } from 'react';
import './UploadPlace.scss';

type UploadPlaceProps = {
  onInputStart: (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, locNum: number) => void;
  day: number;
  nowLocation: {
    departure: string;
    arrival: string;
    travelTime: string;
    transportation: string;
  };
  onInputEnd: (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, locNum: number) => void;
  onInputTime: (e: React.ChangeEvent<HTMLInputElement>, nowDay: number, locNum: number) => void;
  onChangeTranport: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number, id: number) => void;
  onDeleteLocation: (nowDay: number, id: number) => void;
  onResetStartLoc: (nowDay: number, id: number) => void;
  onResetEndLoc: (nowDay: number, id: number) => void;
  id: number;
};

function UploadPlace({
  onInputStart,
  day,
  nowLocation,
  onInputEnd,
  onInputTime,
  onChangeTranport,
  onDeleteLocation,
  onResetEndLoc,
  onResetStartLoc,
  id,
}: UploadPlaceProps) {
  const startLocInputRef = useRef<HTMLInputElement>(null);
  const endLocInputRef = useRef<HTMLInputElement>(null);

  const resetText = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
  };

  return (
    <div className="uploadPlace-wrapper">
      <article className="location-container">
        <img src="imgs/Upload/ic_location_purple.png" alt="start location" />
        <span>출발지</span>
        <div className="input-container">
          <input
            type="text"
            placeholder="출발 장소를 입력해주세요."
            ref={startLocInputRef}
            onChange={(e) => {
              onInputStart(e, day, id);
            }}
            value={nowLocation.departure || ''}
          />
          {nowLocation.departure !== '' && (
            <button
              type="button"
              onClick={() => {
                resetText(startLocInputRef);
                onResetStartLoc(day, id);
              }}
            >
              <img src="imgs/Upload/ic_x_small.png" alt="reset" />
            </button>
          )}
        </div>
      </article>
      <article className="detail-container">
        <div className="time">
          <span>걸린 시간</span>

          <input
            type="text"
            placeholder="걸린 시간을 입력해주세요."
            onChange={(e) => onInputTime(e, day, id)}
            value={nowLocation.travelTime || ''}
          />
        </div>
        <div className="transportation">
          <span>이동 수단</span>
          <div className="buttons">
            {['foot', 'car', 'bus', 'train', 'airplane'].map((transportation) => (
              <TransportationButton
                transportation={transportation}
                key={transportation}
                nowLocation={nowLocation}
                day={day}
                id={id}
                onChangeTransport={onChangeTranport}
              />
            ))}
          </div>
        </div>
      </article>
      <article className="location-container">
        <img src="imgs/Upload/ic_location_purple.png" alt="end location" />
        <span>도착지</span>
        <div className="input-container">
          <input
            type="text"
            placeholder="도착 장소를 입력해주세요."
            ref={endLocInputRef}
            onChange={(e) => {
              onInputEnd(e, day, id);
            }}
            value={nowLocation.arrival || ''}
          />
          {nowLocation.arrival !== '' && (
            <button
              type="button"
              onClick={() => {
                resetText(endLocInputRef);
                onResetEndLoc(day, id);
              }}
            >
              <img src="imgs/Upload/ic_x_small.png" alt="reset" />
            </button>
          )}
        </div>
      </article>
      {id > 0 && (
        <button type="button" className="delete" onClick={() => onDeleteLocation(day, id)}>
          <img src="imgs/Upload/ic_x_circle_full.png" alt="delete" />
        </button>
      )}
    </div>
  );
}

type TransportationButtonProps = {
  transportation: string;
  nowLocation: {
    departure: string;
    arrival: string;
    travelTime: string;
    transportation: string;
  };
  day: number;
  id: number;
  onChangeTransport: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number, id: number) => void;
};

function TransportationButton({ transportation, nowLocation, onChangeTransport, day, id }: TransportationButtonProps) {
  let transportationKR = '';
  switch (transportation) {
    case 'foot':
      transportationKR = '도보';
      break;
    case 'bus':
      transportationKR = '버스';
      break;
    case 'train':
      transportationKR = '전철';
      break;
    case 'car':
      transportationKR = '자동차';
      break;
    case 'airplane':
      transportationKR = '비행기';
      break;
    default:
  }

  return (
    <button
      id="transportation-wrapper"
      type="button"
      onClick={(e) => onChangeTransport(e, day, id)}
      className={transportation === nowLocation.transportation ? 'selected' : ''}
    >
      <img src={`imgs/Upload/emoji_${transportation}.png`} alt={transportation} />
      <span>{transportationKR}</span>
    </button>
  );
}

export default UploadPlace;
