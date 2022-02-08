// action 모음
// user
export const SIGNUP_USER = 'user/SIGNUP_USER' as const;
export const SIGNIN_USER = 'user/SIGNIN_USER' as const;

// post
export const CREATE_POST = 'post/CREATE_POST' as const;
export const UPDATE_POST = 'post/CREATE_POST' as const;

export const locationArr = [
  { location: 'busan', locationKR: '부산' },
  { location: 'jeju', locationKR: '제주도' },
  { location: 'gangneung', locationKR: '강릉/속초' },
  { location: 'yeosu', locationKR: '여수' },
  { location: 'europe', locationKR: '유럽' },
  { location: 'vacation', locationKR: '휴양지' },
  { location: 'usa', locationKR: '미국' },
];

export type HomeFeedsType = {
  category: string;
  date: string;
  title: string;
  image: string;
  location: string;
  locationKR?: string;
  text?: string;
  heart?: number;
  scrap?: number;
};
export const HomeFeedsData: HomeFeedsType[] = [
  {
    category: '감정',
    date: '2박3일',
    title: '나의 두 번째 부산',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'busan',
    locationKR: '부산',
    text: '텍스트입니다텍스트입니다텍스트입니다텍스트입니다',
    heart: 20,
    scrap: 21,
  },
  {
    category: '정보',
    date: '1박2일',
    title: '나만 알고 싶은 색다른 부산',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'busan',
    locationKR: '부산',
    text: '텍스트입니다텍스트입니다텍스트입니다텍스트입니다',
    heart: 10,
    scrap: 11,
  },
  {
    category: '감정',
    date: '1박2일',
    title: '나의 두 번째 부산',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'busan',
    locationKR: '부산',
    text: '텍스트입니다텍스트입니다텍스트입니다텍스트입니다텍스트입니다텍스트입니다텍스트입니다텍스트입니다',
    heart: 2,
    scrap: 2,
  },
];
