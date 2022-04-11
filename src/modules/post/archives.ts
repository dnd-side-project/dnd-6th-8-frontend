import { ThunkAction } from 'redux-thunk';
import { archivingModuleType } from '../../constants/index';
import instance from '../../lib/axios';
import { RootState } from '..';

// 액션 타입
// change -> local에서 바뀔때마다 변경
const POST_MYARCHIVES_ISSHARED_PENDING = 'archives/POST_MYARCHIVES_ISSHARED_PENDING' as const;
const POST_MYARCHIVES_ISSHARED_SUCCESS = 'archives/POST_MYARCHIVES_ISSHARED_SUCCESS' as const;
const POST_MYARCHIVES_ISSHARED_FAILURE = 'archives/POST_MYARCHIVES_ISSHARED_FAILURE' as const;

const POST_MYARCHIVES_PRIVATE_PENDING = 'archives/POST_MYARCHIVES_PRIVATE_PENDING' as const;
const POST_MYARCHIVES_PRIVATE_SUCCESS = 'archives/POST_MYARCHIVES_PRIVATE_SUCCESS' as const;
const POST_MYARCHIVES_PRIVATE_FAILURE = 'archives/POST_MYARCHIVES_PRIVATE_FAILURE' as const;

const myArchivesIsSharedPending = () => ({ type: POST_MYARCHIVES_ISSHARED_PENDING });
const myArchivesIsSharedSuccess = (payload: any) => ({ type: POST_MYARCHIVES_ISSHARED_SUCCESS, payload });
const myArchivesIsSharedFailure = (payload: any) => ({ type: POST_MYARCHIVES_ISSHARED_FAILURE, error: true, payload });

const myArchivesPrivatePending = () => ({ type: POST_MYARCHIVES_PRIVATE_PENDING });
const myArchivesPrivateSuccess = (payload: any) => ({ type: POST_MYARCHIVES_PRIVATE_SUCCESS, payload });
const myArchivesPrivateFailure = (payload: any) => ({ type: POST_MYARCHIVES_PRIVATE_FAILURE, error: true, payload });

type myArchivesAction =
  | ReturnType<typeof myArchivesIsSharedPending>
  | ReturnType<typeof myArchivesIsSharedSuccess>
  | ReturnType<typeof myArchivesIsSharedFailure>
  | ReturnType<typeof myArchivesPrivatePending>
  | ReturnType<typeof myArchivesPrivateSuccess>
  | ReturnType<typeof myArchivesPrivateFailure>;

// thunk 함수

// 공유 피드
export const myArchivesIsShared = (): ThunkAction<void, RootState, null, myArchivesAction> => async (dispatch) => {
  try {
    dispatch(myArchivesIsSharedPending());
    const response = await instance.get(`/api/v1/my/archives/places/on`, {
      params: {
        isShare: true,
      },
    });
    console.log('IsShared 요청 성공', response);
    dispatch(myArchivesIsSharedSuccess(response));
  } catch (e) {
    dispatch(myArchivesIsSharedFailure(e));
    console.log('IsShared 요청 실패', e);
    throw e;
  }
};

// 개인 소장 피드
export const myArchivesPrivate = (): ThunkAction<void, RootState, null, myArchivesAction> => async (dispatch) => {
  try {
    dispatch(myArchivesPrivatePending());
    const response = await instance.get(`/api/v1/my/archives/places/on`, {
      params: {
        isShare: false,
      },
    });
    dispatch(myArchivesPrivateSuccess(response));
    console.log('Private 요청 성공', response);
  } catch (e) {
    dispatch(myArchivesPrivateFailure(e));
    console.log('Private 요청 실패');
    throw e;
  }
};

// 초기 상태
const initailState: archivingModuleType = {
  sharedData: [],
  privateData: [],
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function myArchivesReducer(state: archivingModuleType = initailState, action: myArchivesAction) {
  switch (action.type) {
    case POST_MYARCHIVES_ISSHARED_PENDING:
      return { ...state, loading: true };
    case POST_MYARCHIVES_ISSHARED_SUCCESS:
      return { ...state, sharedData: [...action.payload], loading: false };
    case POST_MYARCHIVES_ISSHARED_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case POST_MYARCHIVES_PRIVATE_PENDING:
      return { ...state, loading: true };
    case POST_MYARCHIVES_PRIVATE_SUCCESS:
      return { ...state, privateData: [...action.payload], loading: false };
    case POST_MYARCHIVES_PRIVATE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default myArchivesReducer;
