import { ThunkAction } from 'redux-thunk';
import { ReadWallPaperModuleType } from '../../constants/index';

import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
const POST_READ_WALLPAPER_PENDING = 'readwallpaper/POST_READ_WALLPAPER_PENDING' as const;
const POST_READ_WALLPAPER_SUCCESS = 'readwallpaper/POST_READ_WALLPAPER_SUCCESS' as const;
const POST_READ_WALLPAPER_FAILURE = 'readwallpaper/POST_READ_WALLPAPER_FAILURE' as const;
// const DELETE_READ_WALLPAPER_PENDING = 'readwallpaper/POST_READ_WALLPAPER_PENDING' as const;
// const DELETE_READ_WALLPAPER_SUCCESS = 'readwallpaper/POST_READ_WALLPAPER_SUCCESS' as const;
// const DELETE_READ_WALLPAPER_FAILURE = 'readwallpaper/POST_READ_WALLPAPER_FAILURE' as const;

const readWallPaperPending = () => ({ type: POST_READ_WALLPAPER_PENDING });
const readWallPaperSuccess = (payload: any) => ({ type: POST_READ_WALLPAPER_SUCCESS, payload });
const readWallPaperFailure = (payload: any) => ({ type: POST_READ_WALLPAPER_FAILURE, error: true, payload });

// const deleteWallPaperPending = () => ({ type: DELETE_READ_WALLPAPER_PENDING });
// const deleteWallPaperSuccess = (payload: any) => ({ type: DELETE_READ_WALLPAPER_SUCCESS });
// const deleteWallPaperFailure = (payload: any) => ({ type: DELETE_READ_WALLPAPER_FAILURE });

type readWallPaperAction =
  | ReturnType<typeof readWallPaperPending>
  | ReturnType<typeof readWallPaperSuccess>
  | ReturnType<typeof readWallPaperFailure>;
// | ReturnType<typeof deleteWallPaperPending>
// | ReturnType<typeof deleteWallPaperSuccess>
// | ReturnType<typeof deleteWallPaperFailure>;

export const readWallPaper =
  (id: string): ThunkAction<void, RootState, null, readWallPaperAction> =>
  async (dispatch) => {
    try {
      dispatch(readWallPaperPending());
      const response = await instance.get(`/api/v1/archives/${id}`);
      console.log('데이터 읽기', response.data);
      dispatch(readWallPaperSuccess(response));
    } catch (e) {
      dispatch(readWallPaperFailure(e));
      throw e;
    }
  };

// export const deleteWallPaper = (): ThunkAction<void, RootState, null, readWallPaperAction> => async (dispatch) => {
//   try {
//     dispatch(deleteWallPaperPending());
//     dispatch(deleteWallPaperSuccess());
//   } catch (e) {
//     dispatch(deleteWallPaperFailure());
//     throw e;
//   }
// };

// 초기 상태
const initailState: ReadWallPaperModuleType = {
  data: {
    archivingStyle: '',
    coverPicture: '',
    createdAt: '',
    emojiNum: null,
    id: null,
    places: '',
    scrapNum: null,
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
      console.log(action.payload);
      return { ...state, data: { ...action.payload }, loading: false };
    case POST_READ_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default readWallPaperReducer;
