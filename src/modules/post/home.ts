import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import instance from '../../lib/axios';
import { HomeFeedType, HomeModuleType, HomeMainType } from '../../constants/index';
import { RootState } from '..';

// action type
// 헤더 데이터
const GET_HOME_PENDING = 'home/GET_HOME_PENDING' as const;
const GET_HOME_SUCCESS = 'home/GET_HOME_SUCCESS' as const;
const GET_HOME_FAILURE = 'home/GET_HOME_FAILURE' as const;

// 지역별 피드
const GET_LOCATION_PENDING = 'home/GET_LOCATION_PENDING' as const;
const GET_LOCATION_SUCCESS = 'home/GET_LOCATION_SUCCESS' as const;
const GET_LOCATION_FAILURE = 'home/GET_LOCATION_FAILURE' as const;

// 추천 피드
const GET_RECOMMEND_PENDING = 'home/GET_RECOMMEND_PENDING' as const;
const GET_RECOMMEND_SUCCESS = 'home/GET_RECOMMEND_SUCCESS' as const;
const GET_RECOMMEND_FAILURE = 'home/GET_RECOMMEND_FAILURE' as const;

// action creator
const getHomePending = () => ({ type: GET_HOME_PENDING });
const getHomeSuccess = (payload: HomeMainType) => ({ type: GET_HOME_SUCCESS, payload });
const getHomeFailure = (payload: AxiosError) => ({
  type: GET_HOME_FAILURE,
  error: true,
  payload,
});

const getLocationPending = () => ({ type: GET_LOCATION_PENDING });
const getLocationSuccess = (payload: HomeFeedType[]) => ({ type: GET_LOCATION_SUCCESS, payload });
const getLocationFailure = (payload: AxiosError) => ({ type: GET_LOCATION_FAILURE, error: true, payload });

const getRecommendPending = () => ({ type: GET_RECOMMEND_PENDING });
const getRecommendSuccess = (payload: HomeFeedType[]) => ({ type: GET_RECOMMEND_SUCCESS, payload });
const getRecommendFailure = (payload: AxiosError) => ({ type: GET_RECOMMEND_FAILURE, error: true, payload });

type homeAction =
  | ReturnType<typeof getHomePending>
  | ReturnType<typeof getHomeSuccess>
  | ReturnType<typeof getHomeFailure>
  | ReturnType<typeof getLocationPending>
  | ReturnType<typeof getLocationSuccess>
  | ReturnType<typeof getLocationFailure>
  | ReturnType<typeof getRecommendPending>
  | ReturnType<typeof getRecommendSuccess>
  | ReturnType<typeof getRecommendFailure>;

// thunk function
export const getHome = (): ThunkAction<void, RootState, null, homeAction> => async (dispatch) => {
  try {
    dispatch(getHomePending());
    const response: HomeMainType = await instance.get(`/api/v1/archives/home`);
    dispatch(getHomeSuccess(response));
  } catch (e: AxiosError | unknown) {
    if (axios.isAxiosError(e)) dispatch(getHomeFailure(e));
    throw e;
  }
};

export const getLocation =
  (place: string): ThunkAction<void, RootState, null, homeAction> =>
  async (dispatch) => {
    try {
      dispatch(getLocationPending());
      const response: HomeFeedType[] = await instance.get(`/api/v1/archives/places`, { params: { place } });
      dispatch(getLocationSuccess(response));
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(getLocationFailure(e));
      throw e;
    }
  };

export const getRecommend = (): ThunkAction<void, RootState, null, homeAction> => async (dispatch) => {
  try {
    dispatch(getRecommendPending());
    const response: HomeFeedType[] = await instance.get(`/api/v1/archives/suggestions`);
    dispatch(getRecommendSuccess(response));
  } catch (e: AxiosError | unknown) {
    if (axios.isAxiosError(e)) dispatch(getRecommendFailure(e));
    throw e;
  }
};

// initial state
const initialState: HomeModuleType = {
  home: { data: null, loading: false, error: null },
  location: { data: [], loading: false, error: null },
  recommend: { data: [], loading: false, error: null },
};

// reducer
// eslint-disable-next-line default-param-last
function home(state: HomeModuleType = initialState, action: homeAction): HomeModuleType {
  switch (action.type) {
    case GET_HOME_PENDING:
      return { ...state, home: { ...state.home, loading: true } };
    case GET_HOME_SUCCESS:
      return { ...state, home: { ...state.home, data: action.payload, loading: false } };
    case GET_HOME_FAILURE:
      return { ...state, home: { ...state.home, loading: false, error: action.payload } };
    case GET_LOCATION_PENDING:
      return { ...state, location: { ...state.location, loading: true } };
    case GET_LOCATION_SUCCESS:
      return { ...state, location: { ...state.location, data: action.payload, loading: false } };
    case GET_LOCATION_FAILURE:
      return { ...state, location: { ...state.location, loading: false, error: action.payload } };
    case GET_RECOMMEND_PENDING:
      return { ...state, recommend: { ...state.recommend, loading: true } };
    case GET_RECOMMEND_SUCCESS:
      return { ...state, recommend: { ...state.recommend, data: action.payload, loading: false } };
    case GET_RECOMMEND_FAILURE:
      return { ...state, recommend: { ...state.recommend, loading: false, error: action.payload } };
    default:
      return state;
  }
}

export default home;
