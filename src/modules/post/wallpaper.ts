import axios from 'axios';
import { UploadWallPaperDataType } from '../../constants/index';

// 액션 타입
// change -> local에서 바뀔때마다 변경
// post -> 저장할때마다 axios 통신
const CHANGE_TITLE = 'wallpaper/CHANGE_TITLE' as const;

const POST_WALLPAPER_PENDING = 'wallpaper/POST_WALLPAPER_PENDING';
const POST_WALLPAPER_SUCCESS = 'wallpaper/POST_WALLPAPER_SUCCESS';
const POST_WALLPAPER_FAILURE = 'wallpaper/POST_WALLPAPER_FAILURE';

// 액션 생성 함수
export const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => ({
  type: CHANGE_TITLE,
  payload: e.target.value,
});

const postWallpaperPending = (payload: UploadWallPaperDataType) => ({ type: POST_WALLPAPER_PENDING, payload });
const postWallpaperSuccess = (payload: any) => ({ type: POST_WALLPAPER_SUCCESS, payload });
const postWallpaperFailure = (payload: any) => ({ type: POST_WALLPAPER_FAILURE, error: true, payload });

type wallpaperAction = ReturnType<typeof changeTitle>;

// thunk 함수

export const postWallpaper = (data: UploadWallPaperDataType) => async (dispatch: any) => {
  try {
    dispatch(postWallpaperPending(data));
    const response = await axios.post(`/api/v1/archives`);
    dispatch(postWallpaperSuccess(response));
  } catch (e) {
    dispatch(postWallpaperFailure(e));
    throw e;
  }
};

// 초기 상태
const initailState: UploadWallPaperDataType = {
  data: {
    coverImage: null,
    title: '',
    place: '',
    firstDay: '',
    lastDay: '',
    haveCompanion: null,
    budget: '',
    archivingStyle: '',
  },
  loading: false,
  error: null,
};

// 리듀서
// eslint-disable-next-line default-param-last
function wallpaper(state: UploadWallPaperDataType = initailState, action: wallpaperAction) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, data: { ...state.data, title: action.payload } };
    // case POST_WALLPAPER_PENDING:
    //   return { ...state, loading: true };
    // case POST_WALLPAPER_SUCCESS:
    //   return { ...state, loading: false };
    // case POST_WALLPAPER_FAILURE:
    //   return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default wallpaper;
