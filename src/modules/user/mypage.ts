import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import instance from '../../lib/axios';
import { RootState } from '..';
import { MyPageData, MyPageModule } from '../../constants';

// action type
const GET_MYPAGE_PENDING = 'mypage/GET_MYPAGE_PENDING' as const;
const GET_MYPAGE_SUCCESS = 'mypage/GET_MYPAGE_SUCCESS' as const;
const GET_MYPAGE_FAILURE = 'mypage/GET_MYPAGE_FAILURE' as const;

const PATCH_COLOR_PENDING = 'mypage/PATCH_COLOR_PENDING' as const;
const PATCH_COLOR_SUCCESS = 'mypage/PATCH_COLOR_SUCCESS' as const;
const PATCH_COLOR_FAILURE = 'mypage/PATCH_COLOR_FAILURE' as const;

// action creator
const getMypagePending = () => ({ type: GET_MYPAGE_PENDING });
const getMypageSuccess = (payload: MyPageData) => ({ type: GET_MYPAGE_SUCCESS, payload });
const getMypageFailure = (payload: AxiosError) => ({ type: GET_MYPAGE_FAILURE, error: true, payload });

const patchColorPending = () => ({ type: PATCH_COLOR_PENDING });
const patchColorSuccess = (payload: string) => ({ type: PATCH_COLOR_SUCCESS, payload });
const patchColorFailure = (payload: AxiosError) => ({ type: PATCH_COLOR_FAILURE, error: true, payload });

type mypageAction =
  | ReturnType<typeof getMypagePending>
  | ReturnType<typeof getMypageSuccess>
  | ReturnType<typeof getMypageFailure>
  | ReturnType<typeof patchColorPending>
  | ReturnType<typeof patchColorSuccess>
  | ReturnType<typeof patchColorFailure>;

// thunk function
export const getMyPage = (): ThunkAction<void, RootState, null, mypageAction> => async (dispatch) => {
  try {
    dispatch(getMypagePending());
    const response: MyPageData = await instance.get(`/api/v1/user`);
    dispatch(getMypageSuccess(response));
  } catch (e: AxiosError | unknown) {
    if (axios.isAxiosError(e)) dispatch(getMypageFailure(e));
    throw e;
  }
};

export const patchColor =
  (color: string): ThunkAction<void, RootState, null, mypageAction> =>
  async (dispatch) => {
    try {
      dispatch(patchColorPending());
      await instance.patch(`/api/v1/user/diarycolor`, { diaryColor: color });
      dispatch(patchColorSuccess(color));
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(patchColorFailure(e));
      throw e;
    }
  };

// initial state
const initialState: MyPageModule = {
  data: {
    userName: '',
    archiveNumber: 0,
    diaryColor: '',
    badgesList: [],
  },
  loading: false,
  error: null,
};

// reducer
// eslint-disable-next-line default-param-last
function mypage(state: MyPageModule = initialState, action: mypageAction): MyPageModule {
  switch (action.type) {
    case GET_MYPAGE_PENDING:
      return { ...state, loading: true };
    case GET_MYPAGE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_MYPAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case PATCH_COLOR_PENDING:
      return { ...state, loading: true };
    case PATCH_COLOR_SUCCESS:
      return { ...state, loading: false, data: { ...state.data, diaryColor: action.payload } };
    case PATCH_COLOR_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default mypage;
