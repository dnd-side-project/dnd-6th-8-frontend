/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import walk from '../assets/icons/Transportation/도보.png';
import car from '../assets/icons/Transportation/자동차.png';
import bus from '../assets/icons/Transportation/버스.png';
import train from '../assets/icons/Transportation/전철.png';
import airplane from '../assets/icons/Transportation/비행기.png';

export const translatorSelector = (translator: string): string => {
  switch (translator) {
    case '도보':
      return walk;
    case '자동차':
      return car;
    case '버스':
      return bus;
    case '전철':
      return train;
    case '비행기':
      return airplane;
    default:
      return '';
  }
};
