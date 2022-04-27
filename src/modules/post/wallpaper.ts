import { ThunkAction } from 'redux-thunk';
import instance from '../../lib/axios';
import { WallPaperModuleType, WallPaperDataType } from '../../constants/index';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
// post -> 저장할때마다 axios 통신
const UPLOAD_IMAGE = 'wallpaper/UPLOAD_IMAGE' as const;
const DELETE_IMAGE = 'wallpaper/DELETE_IMAGE' as const;
const CHANGE_TITLE = 'wallpaper/CHANGE_TITLE' as const;

const POST_WALLPAPER_PENDING = 'wallpaper/POST_WALLPAPER_PENDING' as const;
const POST_WALLPAPER_SUCCESS = 'wallpaper/POST_WALLPAPER_SUCCESS' as const;
const POST_WALLPAPER_FAILURE = 'wallpaper/POST_WALLPAPER_FAILURE' as const;

// 액션 생성 함수
// File object -> redux dev tools에서 {}로 표시됨(https://stackoverflow.com/questions/67137855/how-could-i-handle-a-file-upload-with-react-and-redux)
export const uploadImage = (file: File) => ({
  type: UPLOAD_IMAGE,
  payload: file,
});

export const deleteImage = () => ({
  type: DELETE_IMAGE,
  payload: null,
});

export const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => ({
  type: CHANGE_TITLE,
  payload: e.target.value,
});

const postWallpaperPending = () => ({ type: POST_WALLPAPER_PENDING });
const postWallpaperSuccess = (payload: any) => ({ type: POST_WALLPAPER_SUCCESS, payload });
const postWallpaperFailure = (payload: any) => ({ type: POST_WALLPAPER_FAILURE, error: true, payload });

type wallpaperAction =
  | ReturnType<typeof uploadImage>
  | ReturnType<typeof deleteImage>
  | ReturnType<typeof changeTitle>
  | ReturnType<typeof postWallpaperPending>
  | ReturnType<typeof postWallpaperSuccess>
  | ReturnType<typeof postWallpaperFailure>;

// thunk 함수
export const postWallpaper =
  (data: WallPaperDataType): ThunkAction<void, RootState, null, wallpaperAction> =>
  async (dispatch) => {
    try {
      dispatch(postWallpaperPending());
      console.log(data.coverPicture);
      const response = await instance.post(`/api/v1/archives`, data);
      dispatch(postWallpaperSuccess(response));
    } catch (e) {
      dispatch(postWallpaperFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: WallPaperModuleType = {
  data: {
    coverPicture: null, // null
    title: '',
    place: '',
    firstDay: '',
    lastDay: '',
    haveCompanion: false, // null
    budget: '',
    archivingStyle: '',
  },
  loading: false,
  error: null,
};

// 리듀서
// eslint-disable-next-line default-param-last
function wallpaper(state: WallPaperModuleType = initailState, action: wallpaperAction) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, data: { ...state.data, coverPicture: action.payload } };
    case DELETE_IMAGE:
      return { ...state, data: { ...state.data, coverPicture: action.payload } };
    case CHANGE_TITLE:
      return { ...state, data: { ...state.data, title: action.payload } };
    case POST_WALLPAPER_PENDING:
      return { ...state, loading: true };
    case POST_WALLPAPER_SUCCESS:
      return { ...state, loading: false };
    case POST_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default wallpaper;
