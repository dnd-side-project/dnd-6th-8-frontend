import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import instance from '../../lib/axios';
import { RootState } from '..';
import { MyPageData, MyPageModule } from '../../constants';

// action type
const GET_MYPAGE_PENDING = 'mypage/GET_MYPAGE_PENDING' as const;
const GET_MYPAGE_SUCCESS = 'mypage/GET_MYPAGE_SUCCESS' as const;
const GET_MYPAGE_FAILURE = 'mypage/GET_MYPAGE_FAILURE' as const;

// action creator
const getMypagePending = () => ({ type: GET_MYPAGE_PENDING });
const getMypageSuccess = (payload: MyPageData) => ({ type: GET_MYPAGE_SUCCESS, payload });
const getMypageFailure = (payload: AxiosError) => ({ type: GET_MYPAGE_FAILURE, error: true, payload });

type mypageAction =
  | ReturnType<typeof getMypagePending>
  | ReturnType<typeof getMypageSuccess>
  | ReturnType<typeof getMypageFailure>;

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
    default:
      return state;
  }
}

export default mypage;
