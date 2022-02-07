interface archiveCorePageReadFetchData {
  sharedInfo: Array<object>;
  personalInfo: Array<object>;
}

export const archiveCorePageReadFetchData: any = {
  sharedInfo: [
    {
      archivingStyle: '정보',
      region: '제주도',
      period: '4박5일',
      completeArchive: '2022.01.02',
      title: '대충 다녀도 아름다운 제주도',
    },
    {
      archivingStyle: '감정',
      region: '강릉/속초',
      period: '2박3일',
      completeArchive: '2022.02.01',
      title: '강릉바다에 풍덩!',
    },
  ],
  personalInfo: [
    {
      archivingStyle: '감정',
      region: '러시아',
      period: '5박6일',
      completeArchive: '2022.02.12',
      title: '황홀한 아름다움, 러시아 궁전',
    },
  ],
};

// action 모음
// user
export const SIGNUP_USER = 'user/SIGNUP_USER' as const;
export const SIGNIN_USER = 'user/SIGNIN_USER' as const;

// post
export const CREATE_POST = 'post/CREATE_POST' as const;
export const UPDATE_POST = 'post/CREATE_POST' as const;
