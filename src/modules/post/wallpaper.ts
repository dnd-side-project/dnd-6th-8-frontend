import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import instance from '../../lib/axios';
import { WallPaperModuleType, WallPaperDataType, WallPaperResponseType } from '../../constants/index';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
// post -> 저장할때마다 axios 통신
const CHANGE_IMAGE = 'wallpaper/CHANGE_IMAGE' as const;
const CHANGE_TITLE = 'wallpaper/CHANGE_TITLE' as const;
const CHANGE_TOGGLE = 'wallpaper/CHANGE_TOGGLE' as const;

const RESET_WALLPAPER = 'wallpaper/RESET_WALLPAPER' as const;
const GET_ARCHIVE_ID = 'wallpaper/GET_ARCHIVE_ID' as const;
const SET_BADGE = 'wallpaper/SET_BADGE' as const;
const SET_SHARE = 'wallpaper/SET_SHARE' as const;

const POST_WALLPAPER_PENDING = 'wallpaper/POST_WALLPAPER_PENDING' as const;
const POST_WALLPAPER_SUCCESS = 'wallpaper/POST_WALLPAPER_SUCCESS' as const;
const POST_WALLPAPER_FAILURE = 'wallpaper/POST_WALLPAPER_FAILURE' as const;

const GET_WALLPAPER_PENDING = 'wallpaper/GET_WALLPAPER_PENDING' as const;
const GET_WALLPAPER_SUCCESS = 'wallpaper/GET_WALLPAPER_SUCCESS' as const;
const GET_WALLPAPER_FAILURE = 'wallpaper/GET_WALLPAPER_FAILURE' as const;

const PUT_WALLPAPER_PENDING = 'wallpaper/PUT_WALLPAPER_PENDING' as const;
const PUT_WALLPAPER_SUCCESS = 'wallpaper/PUT_WALLPAPER_SUCCESS' as const;
const PUT_WALLPAPER_FAILURE = 'wallpaper/PUT_WALLPAPER_FAILURE' as const;

// 액션 생성 함수
// File object -> redux dev tools에서 {}로 표시됨(https://stackoverflow.com/questions/67137855/how-could-i-handle-a-file-upload-with-react-and-redux)
export const changeImage = (file: File | null) => ({
  type: CHANGE_IMAGE,
  payload: file,
});

export const changeTitle = (value: string | null) => ({
  type: CHANGE_TITLE,
  payload: value,
});

export const changeToggle = (name: string, value: string) => ({
  type: CHANGE_TOGGLE,
  payload: { name, value },
});

export const resetWallpaper = () => ({
  type: RESET_WALLPAPER,
});

export const getArchiveId = (id: number) => ({
  type: GET_ARCHIVE_ID,
  payload: id,
});

export const setBadge = (badge: string) => ({
  type: SET_BADGE,
  payload: badge,
});

export const setShare = (share: boolean) => ({
  type: SET_SHARE,
  payload: share,
});

const postWallpaperPending = () => ({ type: POST_WALLPAPER_PENDING });
const postWallpaperSuccess = (payload: number) => ({ type: POST_WALLPAPER_SUCCESS, payload });
const postWallpaperFailure = (payload: AxiosError) => ({ type: POST_WALLPAPER_FAILURE, error: true, payload });

const getWallpaperPending = (payload: number) => ({ type: GET_WALLPAPER_PENDING, payload });
const getWallpaperSuccess = (payload: WallPaperDataType) => ({ type: GET_WALLPAPER_SUCCESS, payload });
const getWallpaperFailure = (payload: AxiosError) => ({ type: GET_WALLPAPER_FAILURE, error: true, payload });

const putWallpaperPending = () => ({ type: PUT_WALLPAPER_PENDING });
const putWallpaperSuccess = () => ({ type: PUT_WALLPAPER_SUCCESS });
const putWallpaperFailure = (payload: AxiosError) => ({ type: PUT_WALLPAPER_FAILURE, error: true, payload });

type wallpaperAction =
  | ReturnType<typeof changeImage>
  | ReturnType<typeof changeTitle>
  | ReturnType<typeof changeToggle>
  | ReturnType<typeof resetWallpaper>
  | ReturnType<typeof getArchiveId>
  | ReturnType<typeof setBadge>
  | ReturnType<typeof setShare>
  | ReturnType<typeof postWallpaperPending>
  | ReturnType<typeof postWallpaperSuccess>
  | ReturnType<typeof postWallpaperFailure>
  | ReturnType<typeof getWallpaperPending>
  | ReturnType<typeof getWallpaperSuccess>
  | ReturnType<typeof getWallpaperFailure>
  | ReturnType<typeof putWallpaperPending>
  | ReturnType<typeof putWallpaperSuccess>
  | ReturnType<typeof putWallpaperFailure>;

// thunk 함수
export const postWallpaper =
  (data: WallPaperDataType): ThunkAction<void, RootState, null, wallpaperAction> =>
  async (dispatch) => {
    try {
      dispatch(postWallpaperPending());
      const formData = new FormData();
      if (data.coverImage) formData.append('coverImage', data.coverImage);
      const archivesSaveRequestDto = JSON.stringify(data);
      formData.append('archivesSaveRequestDto', new Blob([archivesSaveRequestDto], { type: 'application/json' }));
      const response: WallPaperResponseType = await instance.post(`/api/v1/archives`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // if (response.id) dispatch(getArchiveId(response.id));
      dispatch(postWallpaperSuccess(response.id));
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(postWallpaperFailure(e));
      throw e;
    }
  };

export const getWallpaper =
  (id: number): ThunkAction<void, RootState, null, wallpaperAction> =>
  async (dispatch) => {
    try {
      dispatch(getWallpaperPending(id));
      const response: WallPaperDataType = await instance.get(`/api/v1/archives/${id}`);
      dispatch(getWallpaperSuccess(response));
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(getWallpaperFailure(e));
      throw e;
    }
  };

export const putWallpaper =
  (data: WallPaperDataType): ThunkAction<void, RootState, null, wallpaperAction> =>
  async (dispatch) => {
    try {
      dispatch(putWallpaperPending());
      const formData = new FormData();
      if (data.coverImage instanceof File) formData.append('coverImage', data.coverImage);
      else data.imagesUrl = data.coverImage;
      const archiveUpdateRequestDto = JSON.stringify(data);
      formData.append('archiveUpdateRequestDto', new Blob([archiveUpdateRequestDto], { type: 'application/json' }));
      await instance.put(`/api/v1/archives/${data.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(putWallpaperSuccess());
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(putWallpaperFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: WallPaperModuleType = {
  data: {
    coverImage: null,
    imagesUrl: null,
    title: null,
    places: null,
    firstDay: null,
    lastDay: null,
    haveCompanion: null,
    budget: null,
    archivingStyle: null,
    id: null,
    // share: false,
  },
  loading: false,
  error: null,
};

// 리듀서
// eslint-disable-next-line default-param-last
function wallpaper(state: WallPaperModuleType = initailState, action: wallpaperAction) {
  switch (action.type) {
    case CHANGE_IMAGE:
      if (!action.payload) return { ...state, data: { ...state.data, coverImage: null } };
      return {
        ...state,
        data: { ...state.data, coverImage: action.payload },
      };
    case CHANGE_TITLE:
      return { ...state, data: { ...state.data, title: action.payload } };
    case CHANGE_TOGGLE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value,
        },
      }; // key object 변수 설정할때는 [key]:value 형태 사용
    case RESET_WALLPAPER:
      return {
        data: {
          coverImage: null,
          imagesUrl: null,
          title: null,
          places: null,
          firstDay: null,
          lastDay: null,
          haveCompanion: null,
          budget: null,
          archivingStyle: null,
          id: null,
        },
        loading: false,
        error: null,
      };
    // // case SET_BADGE:
    // //   return { ...state, data: { ...state.data, badge: action.payload } };
    // // case SET_SHARE:
    // //   return { ...state, data: { ...state.data, archivesDto: { ...state.data.archivesDto, share: action.payload } } };
    case POST_WALLPAPER_PENDING:
      return { ...state, loading: true };
    case POST_WALLPAPER_SUCCESS:
      return { ...state, loading: false, data: { ...state.data, id: action.payload } };
    case POST_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_WALLPAPER_PENDING:
      return { ...state, loading: true };
    case GET_WALLPAPER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case PUT_WALLPAPER_PENDING:
      return { ...state, loading: true };
    case PUT_WALLPAPER_SUCCESS:
      return { ...state, loading: false };
    case PUT_WALLPAPER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default wallpaper;
