import { ThunkAction } from 'redux-thunk';
import {  ReadWallPaperModuleType  } from "../../constants/index";

import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
const POST_READ_WALLPAPER_PENDING = 'readwallpaper/POST_READ_WALLPAPER_PENDING' as const;
const POST_READ_WALLPAPER_SUCCESS = 'readwallpaper/POST_READ_WALLPAPER_SUCCESS' as const;
const POST_READ_WALLPAPER_FAILURE = 'readwallpaper/POST_READ_WALLPAPER_FAILURE' as const;

const readWallPaperPending = () => ({ type: POST_READ_WALLPAPER_PENDING });
const readWallPaperSuccess = (payload: any) => ({ type: POST_READ_WALLPAPER_SUCCESS, payload });
const readWallPaperFailure = (payload: any) => ({ type: POST_READ_WALLPAPER_FAILURE, error: true, payload });

type readWallPaperAction =
  | ReturnType<typeof readWallPaperPending>
  | ReturnType<typeof readWallPaperSuccess>
  | ReturnType<typeof readWallPaperFailure>;

// thunk 함수

export const readWallPaper =
  (id: string): ThunkAction<void, RootState, null, readWallPaperAction> =>
  async (dispatch) => {
    try {
      dispatch(readWallPaperPending());
      const response = await instance.get(`/api/v1/archives/${id}`);
      console.log('wallPaper 요청 성공', response);
      dispatch(readWallPaperSuccess(response));
    } catch (e) {
      dispatch(readWallPaperFailure(e));
      console.log('wallPaper 요청 실패', e);
      throw e;
    }
  };

// 초기 상태
const initailState: ReadWallPaperModuleType = {
  data : {
    archivingStyle: '',
    coverPicture: '',
    createdAt: '',
    emojiNum: -1,
    id: -1,
    places: '',
    scrapNum: -1,
    shortContent: '',
    title: '',
    travelDuration: '',
  },
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function readWallPaperReducer(state: ReadWallPaperModuleType = initailState, action: readWallPaperAction) {
  switch (action.type) {
    case POST_READ_WALLPAPER_PENDING:
      return { ...state, loading: true };
    case POST_READ_WALLPAPER_SUCCESS:
      return { ...state, data: {...action.payload}, loading: false };
    case POST_READ_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default readWallPaperReducer;
