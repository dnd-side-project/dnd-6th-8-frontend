import { ThunkAction } from 'redux-thunk';
import instance from '../../lib/axios';
import { UserInfoModuleType } from '../../constants/index';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
const USER_USERINFO_PENDING = 'userinfo/USER_USERINFO_PENDING' as const;
const USER_USERINFO_SUCCESS = 'userinfo/USER_USERINFO_SUCCESS' as const;
const USER_USERINFO_FAILURE = 'userinfo/USER_USERINFO_FAILURE' as const;

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
    dispatch(userInfoSuccess(response));
    console.log('요청 성공'); 
  } catch (e) {
    dispatch(userInfoFailure(e));
    console.log('요청 실패'); 
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
function userInfomation(state: UserInfoModuleType = initailState, action: userInfoAction) {
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

export default userInfomation;
