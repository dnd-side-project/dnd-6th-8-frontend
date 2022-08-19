/* eslint-disable import/prefer-default-export */
import Sun from '../assets/icons/Weather/맑음.png';
import Cloudy from '../assets/icons/Weather/흐림.png';
import Rainy from '../assets/icons/Weather/비.png';
import Snow from '../assets/icons/Weather/눈.png';

export const weatherSelector = (weather: string): string => {
  switch (weather) {
    case '맑음':
      return Sun;
    case '흐림':
      return Cloudy;
    case '비':
      return Rainy;
    case '눈':
      return Snow;
    default:
      return '';
  }
};
