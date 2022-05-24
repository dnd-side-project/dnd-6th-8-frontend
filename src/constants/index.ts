import Jeju1 from '../assets/icons/WallPaper/dayfeed/img_jeju02.png';
import Jeju2 from '../assets/icons/WallPaper/dayfeed/img_jeju03.png';
import Jeju3 from '../assets/icons/WallPaper/dayfeed/img_jeju04.png';
// action 모음
// user
export const SIGNUP_USER = 'user/SIGNUP_USER' as const;
export const SIGNIN_USER = 'user/SIGNIN_USER' as const;

// post
export const CREATE_POST = 'post/CREATE_POST' as const;
export const UPDATE_POST = 'post/CREATE_POST' as const;

// 더미데이터
export type archivingDataType = {
  id: number;
  archivingStyle: string;
  region: string;
  period: string;
  completeArchive: string;
  title: string;
  img: string;
};

// 아카이빙 Real Data 정의
export type archivingType = {
  archivingStyle: string;
  coverPicture: string;
  emojiNum: number;
  id: number;
  places: string;
  scrapNum: number;
  title: string;
  travelDuration: string;
};

// 아카이빙 Real Data 실제 Redux initialState
export type archivingModuleType = {
  sharedData: archivingType[];
  privateData: archivingType[];
  loading: boolean;
  error: boolean | Error;
};

export type WallPaperModuleType = {
  data: {
    coverPicture: File | null;
    title: string;
    place: string;
    firstDay: string;
    lastDay: string;
    haveCompanion: boolean | null;
    budget: string;
    archivingStyle: string;
  };
  loading: boolean;
  error: null | Error;
};

export type WallPaperDatatType = {
  coverPicture: File | null;
  title: string;
  place: string;
  firstDay: string;
  lastDay: string;
  haveCompanion: boolean | null;
  budget: string;
  archivingStyle: string;
};

// Home
// 지역 별로 한글 매칭
export const locationNames = [
  { title: '부산', en: 'busan', param: '부산' },
  { title: '제주도', en: 'jeju', param: '제주' },
  { title: '강릉/속초', en: 'gangneung', param: '강릉속초' },
  { title: '여수', en: 'yeosu', param: '여수' },
  { title: '유럽', en: 'europe', param: '유럽' },
  { title: '휴양지', en: 'vacation', param: '휴양지' },
  { title: '미국', en: 'usa', param: '미국' },
];

export type HomeFeedType = {
  archivingStyle: string;
  coverImage: string;
  emojiNum: number;
  id: number;
  places: string;
  scrapNum: number;
  title: string;
  travelDuration: string;
  createdAt: string;
  shortContent: string;
};

export type HomeModuleType = {
  home: {
    data: HomeMainType | null;
    loading: boolean;
    error: null | Error;
  };
  location: {
    data: HomeFeedType[];
    loading: boolean;
    error: null | Error;
  };
  recommend: {
    data: HomeFeedType[];
    loading: boolean;
    error: null | Error;
  };
};

export type HomeMainType = {
  firstArchiveImage: string;
  secondArchiveImage: string;
  thirdArchiveImage: string;
  totalArchiveImage: number;
  userNickName: string;
};

export type UserInfoModuleType = {
  data: {
    surveyResponse: {
      archivingStyle: string;
      budget: string;
      haveCompanion: boolean | null;
    };
    userEmail: string;
    userName: string;
  };
  loading: boolean;
  error: boolean | Error;
};

export type archivingDataObject = {
  sharedInfo: Array<archivingDataType>;
  personalInfo: Array<archivingDataType>;
};

export const archiveCorePageReadFetchData: archivingDataObject = {
  sharedInfo: [
    {
      id: 0,
      archivingStyle: '정보',
      region: '제주도',
      period: '4박5일',
      completeArchive: '2022.01.02',
      title: '대충 다녀도 아름다운 제주도',
      img: 'imgs/ArchivingPage/ArchivingCorePage/img_jeju01_archiving.png',
    },
    {
      id: 1,
      archivingStyle: '감정',
      region: '강릉/속초',
      period: '2박3일',
      completeArchive: '2022.02.01',
      title: '강릉바다에 풍덩!',
      img: 'imgs/ArchivingPage/ArchivingCorePage/img_gangneung01_archiving.png',
    },
  ],
  personalInfo: [
    {
      id: 2,
      archivingStyle: '감정',
      region: '러시아',
      period: '5박6일',
      completeArchive: '2022.02.12',
      title: '황홀한 아름다움, 러시아 궁전',
      img: 'imgs/ArchivingPage/ArchivingCorePage/img_russia01_archiving.png',
    },
  ],
};

// [Home] 지역 별 추천, 사용자 취향 별 추천 피드 타입
export type HomeFeedsType = {
  id: number; // 피드 번호
  category: string; // 카테고리 (감성/정보)
  date: string; // 여행기간
  title: string; // 여행 제목
  image: string; // 표지 이미지
  location: string; // 여행 지역 영어
  locationKR?: string; // 여행 지역 한글
  text?: string; // 여행 여정 텍스트
  heart?: number; // 좋아요 수
  scrap?: number; // 스크랩 수
};

// 지역 별 추천 데이터
export const HomeLocFeedData: HomeFeedsType[] = [
  {
    id: 1,
    category: '감정',
    date: '2박3일',
    title: '나의 두 번째 부산',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'busan',
  },
  {
    id: 2,
    category: '정보',
    date: '1박2일',
    title: '나만 알고 싶은 색다른 부산',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'busan',
  },
  {
    id: 3,
    category: '감정',
    date: '1박2일',
    title: '나의 두 번째 여수',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'yeosu',
  },
  {
    id: 4,
    category: '정보',
    date: '1박2일',
    title: '나의 두 번째 여수',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'yeosu',
  },
  {
    id: 5,
    category: '정보',
    date: '1박2일',
    title: '나의 두 번째 여수 나의 두 번째 여수',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'yeosu',
  },
  {
    id: 6,
    category: '정보',
    date: '1박2일',
    title: '나의 두 번째 여수',
    image: 'imgs/Home/img_busan01_home.png',
    location: 'yeosu',
  },
];

// 취향 맞춤 추천 피드 데이터
export const HomeRecFeedData: HomeFeedsType[] = [
  {
    id: 21,
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
    id: 22,
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
    id: 23,
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

export type dayTripCourse = {
  arriveTime: number;
  finish: string;
  start: string;
  goingBy: string;
};

export type DayFeedDataType = {
  day: number;
  date: string;
  weather: string;
  imgs: string[];
  dayCourse: dayTripCourse[];
  dayJourney: string;
  dayFeel: string;
  dayHoneyTip: string;
};

export const dayFeedFetchData: DayFeedDataType[] = [
  {
    day: 1,
    date: '2022.01.10(월)',
    weather: '맑음',
    imgs: [Jeju1, Jeju2, Jeju3, Jeju1, Jeju2, Jeju3],
    dayCourse: [
      { start: '함덕게스트하우스', arriveTime: 40, goingBy: '자동차', finish: '둘이먹다가죽어도모를만한킹받는맛집' },
      { start: '애월게스트하우스', arriveTime: 70, goingBy: '지하철', finish: '나쁜양념게장' },
      { start: '표선해비치리조트', arriveTime: 100, goingBy: '배', finish: '착한양념게장' },
    ],
    dayJourney:
      '제주도의 인생 맛집을 찾았다! 간장게장과 꽃게 튀김이 일품인 곳이었다. 또한 제주도의 유명한 GD카페를 가봤는데, 역시 GD의 감성이 묻어있는 곳이었다. 오늘은 맛집과 카페를 방문하고 중간중간에 드라이브도 하니 제주도의 여행을 제대로 만끽할 수 있는 날이었던 것 같다.',
    dayFeel:
      '가족과 오랜만에 갔던 여행이라 더 좋았다. 가족과의 소중한 추억의 한 페이지로 남을 수 있을 것 같은 하루였다. 부모님이 함께 손 잡고 바다를 걷는 모습을 보면서 괜히 뭉클하기도 했다.',
    dayHoneyTip: '송악산 둘레길 갈 때 네이버 지도 참고하고하고 가기! 그리고, 제주 ‘참한간장게장’ 꼭 가보기!!',
  },
  {
    day: 2,
    date: '2022.01.11(화)',
    weather: '흐림',
    imgs: [Jeju1, Jeju2, Jeju3],
    dayCourse: [
      { start: '함덕게스트하우스', arriveTime: 40, goingBy: '자동차', finish: '둘이먹다가죽어도모를만한킹받는맛집' },
      { start: '애월게스트하우스', arriveTime: 70, goingBy: '지하철', finish: '나쁜양념게장' },
      { start: '표선해비치리조트', arriveTime: 100, goingBy: '배', finish: '착한양념게장' },
    ],
    dayJourney:
      '제주도의 인생 맛집을 찾았다! 양념게장과 한라봉 튀김이 일품인 곳이었다. 또한 제주도의 유명한 GD카페를 가봤는데, 역시 GD의 감성이 묻어있는 곳이었다. 오늘은 맛집과 카페를 방문하고 중간중간에 드라이브도 하니 제주도의 여행을 제대로 만끽할 수 있는 날이었던 것 같다.',
    dayFeel:
      '친구들과 오랜만에 갔던 여행이라 더 좋았다. 가족과의 소중한 추억의 한 페이지로 남을 수 있을 것 같은 하루였다. 부모님이 함께 손 잡고 바다를 걷는 모습을 보면서 괜히 뭉클하기도 했다.',
    dayHoneyTip: '산방산 둘레길 갈 때 네이버 지도 참고하고하고 가기! 그리고, 제주 ‘참한간장게장’ 꼭 가보기!!',
  },
];

export const ScrapData = [
  {
    id: 1,
    title: '나의 두 번째 부산',
    cateogry: '감정',
    image: 'imgs/Home/img_busan01_home.png',
  },
  {
    id: 2,
    title: '제주도에서 한달 살기',
    cateogry: '정보',
    image: 'imgs/Home/img_busan01_home.png',
  },
  {
    id: 3,
    title: '프라하에서 체스키어쩌구저쩌구',
    cateogry: '정보',
    image: 'imgs/Home/img_busan01_home.png',
  },
  {
    id: 4,
    title: '강릉에서 적는 회고록',
    cateogry: '감정',
    image: 'imgs/Home/img_busan01_home.png',
  },
  {
    id: 5,
    title: '나의 두 번째 부산',
    cateogry: '감정',
    image: 'imgs/Home/img_busan01_home.png',
  },
  {
    id: 6,
    title: '나의 두 번째 부산',
    cateogry: '감정',
    image: 'imgs/Home/img_busan01_home.png',
  },
];
