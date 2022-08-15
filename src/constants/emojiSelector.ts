/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import Busan from '../assets/icons/TravelArea/부산.png';
import Jeju from '../assets/icons/TravelArea/제주.png';
import Gangneung from '../assets/icons/TravelArea/강릉_속초.png';
import Yeosu from '../assets/icons/TravelArea/여수.png';
import Europe from '../assets/icons/TravelArea/유럽.png';
import Vacation from '../assets/icons/TravelArea/휴양지.png';
import USA from '../assets/icons/TravelArea/미국.png';
import Default from '../assets/icons/WallPaper/defaultImg.png';

export const emojiSelector = (area: string): string => {
  switch (area) {
    case '부산':
      return Busan;
    case '제주도':
      return Jeju;
    case '강릉/속초':
      return Gangneung;
    case '여수':
      return Yeosu;
    case '유럽':
      return Europe;
    case '미국':
      return USA;
    case '휴양지':
      return Vacation;
    default:
      return Default;
  }
};
