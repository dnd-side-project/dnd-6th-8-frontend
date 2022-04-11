import { ThunkAction } from 'redux-thunk';
import { archivingModuleType } from '../../constants/index';
import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
const POST_MYARCHIVES_PENDING = 'archives/POST_MYARCHIVES_PENDING' as const;
const POST_MYARCHIVES_SUCCESS = 'archives/POST_MYARCHIVES_SUCCESS' as const;
const POST_MYARCHIVES_FAILURE = 'archives/POST_MYARCHIVES_FAILURE' as const;

const myArchivesPending = () => ({ type: POST_MYARCHIVES_PENDING });
const myArchivesSuccess = (payload: any) => ({ type: POST_MYARCHIVES_SUCCESS, payload });
const myArchivesFailure = (payload: any) => ({ type: POST_MYARCHIVES_FAILURE, error: true, payload });

type myArchivesAction =
  | ReturnType<typeof myArchivesPending>
  | ReturnType<typeof myArchivesSuccess>
  | ReturnType<typeof myArchivesFailure>;

// thunk 함수

// 공유 피드
export const myArchivesIsShared = (): ThunkAction<void, RootState, null, myArchivesAction> => async (dispatch) => {
  try {
    dispatch(myArchivesPending());
    const response = await instance.get(`/api/v1/user/achives`, {
      params: {
        isShare: true,
      },
    });
    dispatch(myArchivesSuccess(response));
    console.log('IsShared 요청 성공');
  } catch (e) {
    dispatch(myArchivesFailure(e));
    console.log('IsShared 요청 실패');
    throw e;
  }
};

// 개인 소장 피드
export const myArchivesPrivate = (): ThunkAction<void, RootState, null, myArchivesAction> => async (dispatch) => {
  try {
    dispatch(myArchivesPending());
    const response = await instance.get(`/api/v1/user/achives`, {
      params: {
        isShare: false,
      },
    });
    dispatch(myArchivesSuccess(response));
    console.log('Private 요청 성공');
  } catch (e) {
    dispatch(myArchivesFailure(e));
    console.log('Private 요청 실패');
    throw e;
  }
};

// 초기 상태
const initailState: archivingModuleType = {
  data: [],
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function myArchivesReducer(state: archivingModuleType = initailState, action: myArchivesAction) {
  switch (action.type) {
    case POST_MYARCHIVES_PENDING:
      return { ...state, loading: true };
    case POST_MYARCHIVES_SUCCESS:
      return { ...state, data: { ...action.payload }, loading: false };
    case POST_MYARCHIVES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default myArchivesReducer;
