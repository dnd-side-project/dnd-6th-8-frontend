import { ThunkAction } from 'redux-thunk';
import { ReadWallPaperModuleType } from '../../constants/index';

import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
const POST_READ_WALLPAPER_PENDING = 'readwallpaper/POST_READ_WALLPAPER_PENDING' as const;
const POST_READ_WALLPAPER_SUCCESS = 'readwallpaper/POST_READ_WALLPAPER_SUCCESS' as const;
const POST_READ_WALLPAPER_FAILURE = 'readwallpaper/POST_READ_WALLPAPER_FAILURE' as const;
const DELETE_READ_WALLPAPER = 'readwallpaper/POST_READ_WALLPAPER' as const;

const readWallPaperPending = () => ({ type: POST_READ_WALLPAPER_PENDING });
const readWallPaperSuccess = (payload: any) => ({ type: POST_READ_WALLPAPER_SUCCESS, payload });
const readWallPaperFailure = (payload: any) => ({ type: POST_READ_WALLPAPER_FAILURE, error: true, payload });

export const deleteWallPaper = () => ({ type: DELETE_READ_WALLPAPER });

type readWallPaperAction =
  | ReturnType<typeof readWallPaperPending>
  | ReturnType<typeof readWallPaperSuccess>
  | ReturnType<typeof readWallPaperFailure>
  | ReturnType<typeof deleteWallPaper>;

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

// 초기 상태
const initailState: ReadWallPaperModuleType = {
  data: {
    id: null,
    title: null,
    firstDay: null,
    lastDay: null,
    places: null,
    archivingStyle: null,
    budget: null,
    haveCompanion: null,
    coverImage: null,
    countDayFeeds: null,
    share: null,
    travelDuration: null,
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
    case DELETE_READ_WALLPAPER:
      return {
        ...state,
        data: {
          id: null,
          title: null,
          firstDay: null,
          lastDay: null,
          places: null,
          archivingStyle: null,
          budget: null,
          haveCompanion: null,
          coverImage: null,
          countDayFeeds: null,
          share: null,
        },
      };
    default:
      return state;
  }
}

export default readWallPaperReducer;
