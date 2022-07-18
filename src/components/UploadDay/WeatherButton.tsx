import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

type WeatherButtonProps = {
  onInputWeather: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nowDay: number) => void;
  selectedDay: number;
  alt: string;
};

function EngToKor(eng: string) {
  switch (eng) {
    case 'sun':
      return '맑음';
    case 'cloud':
      return '흐림';
    case 'rain':
      return '비';
    case 'snow':
      return '눈';
    default:
  }
}

function WeatherButton({ onInputWeather, selectedDay, alt }: WeatherButtonProps) {
  const days = useSelector((state: RootState) => state.days.data);
  return (
    <button
      type="button"
      onClick={(e) => onInputWeather(e, selectedDay)}
      className={days[selectedDay - 1].weather === alt ? 'selected' : ''}
    >
      <img src={`imgs/Upload/illust_${alt}.png`} alt={alt} />
      <span>{EngToKor(alt)}</span>
    </button>
  );
}

export default WeatherButton;
