interface archiveCorePageReadFetchData {
  sharedInfo: Array<object>;
  personalInfo: Array<object>;
}

export const archiveCorePageReadFetchData: any = {
  sharedInfo: [
    {
      region: '제주도',
      period: '4박 5일',
      completeArchive: '2022.01.02',
    },
    {
      region: '강릉/속초',
      period: '2박 3일',
      completeArchive: '2022.02.01',
    },
  ],
  personalInfo: [
    {
      region: '러시아',
      period: '5박 6일',
      completeArchive: '2022.02.12',
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
