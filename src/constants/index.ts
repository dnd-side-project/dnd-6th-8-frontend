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
  coverImage: any;
  createdAt: string;
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

export type WallPaperDataType = {
  [index: string]: string | File | null;
  coverPicture: File | null;
  title: string;
  place: string;
  firstDay: string;
  lastDay: string;
  haveCompanion: string;
  budget: string;
  archivingStyle: string;
};

export type WallPaperModuleType = {
  data: WallPaperDataType;
  loading: boolean;
  error: null | Error;
};
// real WallPaer 데이터 => 실제로 클릭했을 때 뜨는 정보
export type ReadWallPaperDataType = {
  archivingStyle: string;
  coverPicture: string;
  createdAt: string;
  emojiNum: number | null;
  id: number | null;
  places: string;
  scrapNum: number | null;
  shortContent: string;
  title: string;
  travelDuration: string;
};

// wallPaper InitailState
export type ReadWallPaperModuleType = {
  data: ReadWallPaperDataType;
  loading: boolean;
  error: boolean | Error;
};


export type daysObjectiveResponseDtoList = {
  arrival: string;
  departure: string;
  transportation: string;
  travelTime: string;
};
export type daysSubjectiveResponseDtoList = {
  archiveId: number;
  date: string;
  dayNumber: number;
  emotionDescription: string;
  tipDescription: string;
  travelDescription: string;
  weather: string;
  writer: string;
};

export type DayFeedDataType = {
  daysInArchiveDto: {
    archiveTitle: string;
    firstDay: string;
    lastDay: string;
  };
  daysObjectiveResponseDtoList: daysObjectiveResponseDtoList[];
  daysSubjectiveResponseDtoList: daysSubjectiveResponseDtoList[];
};

export type DayFeedModuleType = {
  data: DayFeedDataType[];
  loading: boolean;
  error: boolean | Error;
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
  totalArchiveNum: number;
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
