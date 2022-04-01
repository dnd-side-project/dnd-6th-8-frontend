import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import instance from '../../lib/axios';
import { UserInfoModuleType } from '../../constants/index';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
const USER_USERINFO_PENDING = 'userinfo/USER_USERINFO_PENDING' as const;
const USER_USERINFO_SUCCESS = 'userinfo/USER_USERINFO_SUCCESS' as const;
const USER_USERINFO_FAILURE = 'userinfo/USER_USERINFO_FAILURE' as const;

// 액션 생성 함수
// File object -> redux dev tools에서 {}로 표시됨(https://stackoverflow.com/questions/67137855/how-could-i-handle-a-file-upload-with-react-and-redux)

const userInfoPending = () => ({ type: USER_USERINFO_PENDING });
const userInfoSuccess = (payload: any) => ({ type: USER_USERINFO_SUCCESS, payload });
const userInfoFailure = (payload: any) => ({ type: USER_USERINFO_FAILURE, error: true, payload });

type userInfoAction =
  | ReturnType<typeof userInfoPending>
  | ReturnType<typeof userInfoSuccess>
  | ReturnType<typeof userInfoFailure>;

// thunk 함수
export const userInfo = (): ThunkAction<void, RootState, null, userInfoAction> => async (dispatch) => {
  try {
    dispatch(userInfoPending());
    const response = await instance.get(`/api/v1/user/info`);
    console.log(response);
    dispatch(userInfoSuccess(response));
  } catch (e) {
    dispatch(userInfoFailure(e));
    throw e;
  }
};

// 초기 상태
const initailState: UserInfoModuleType = {
  data: {
    surveyResponse: {
      archivingStyle: '',
      budget: '',
      haveCompanion: null,
    },
    userEmail: '',
    userName: '',
  },
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function userInfoReducer(state: UserInfoModuleType = initailState, action: userInfoAction) {
  switch (action.type) {
    case USER_USERINFO_PENDING:
      return { ...state, loading: true };
    case USER_USERINFO_SUCCESS:
      return { ...state, data: { ...action.payload }, loading: false };
    case USER_USERINFO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default userInfoReducer;
