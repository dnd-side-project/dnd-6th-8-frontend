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
  [index: string]: string | File | null | ArchivesDtoType;
  coverImage: File | null | string;
  archivesDto: ArchivesDtoType;
};

export type ArchivesDtoType = {
  imagesUrl: string | null;
  title: string | null;
  places: string | null;
  firstDay: string | null;
  lastDay: string | null;
  haveCompanion: string | null | boolean;
  budget: string | null;
  archivingStyle: string | null;
  id: number | null;
  // countDaysFeeds: number | null;
  share: boolean;
};

export type WallPaperResponseType = {
  coverImage: string;
  title: string;
  places: string;
  firstDay: string;
  lastDay: string;
  haveCompanion: boolean;
  budget: string;
  archivingStyle: string;
  id: number;
  countDaysFeeds: number;
  share: boolean;
  travelDuration: string;
};

export type WallPaperModuleType = {
  data: WallPaperDataType;
  loading: boolean;
  error: null | Error;
  badge: string;
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

export type EmoJiReadDataType = {
  emojiId: number;
  emojiCount: number;
  emojisName: string;
  emojisUrl: string;
};

export type EmojiReadDataModuleType = {
  data: EmoJiReadDataType[];
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
