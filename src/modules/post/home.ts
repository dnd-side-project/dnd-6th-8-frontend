import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import instance from '../../lib/axios';
import { HomeFeedType, HomeModuleType, HomeMainType } from '../../constants/index';
import { RootState } from '..';

// action type
const GET_HOME_PENDING = 'home/GET_HOME_PENDING' as const;
const GET_HOME_SUCCESS = 'home/GET_HOME_SUCCESS' as const;
const GET_HOME_FAILURE = 'home/GET_HOME_FAILURE' as const;

// action creator
const getHomePending = () => ({ type: GET_HOME_PENDING });
const getHomeSuccess = (payload: {
  homeRes?: HomeMainType;
  locationRes: HomeFeedType[];
  recommendRes?: HomeFeedType[];
}) => ({ type: GET_HOME_SUCCESS, payload });
const getHomeFailure = (payload: AxiosError) => ({
  type: GET_HOME_FAILURE,
  error: true,
  payload,
});

type homeAction =
  | ReturnType<typeof getHomePending>
  | ReturnType<typeof getHomeSuccess>
  | ReturnType<typeof getHomeFailure>;

// thunk function
export const getHome =
  (place: string, onlyLocation: boolean): ThunkAction<void, RootState, null, homeAction> =>
  async (dispatch) => {
    try {
      if (!onlyLocation) {
        dispatch(getHomePending());
        const homeRes: HomeMainType = await instance.get(`/api/v1/archives/home`);
        const recommendRes: HomeFeedType[] = await instance.get(`/api/v1/archives/suggestions`);
        const locationRes: HomeFeedType[] = await instance.get(`/api/v1/archives/places`, { params: { place } });
        dispatch(getHomeSuccess({ homeRes, locationRes, recommendRes }));
      } else {
        const locationRes: HomeFeedType[] = await instance.get(`/api/v1/archives/places`, { params: { place } });
        dispatch(getHomeSuccess({ locationRes }));
      }
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) dispatch(getHomeFailure(e));
      throw e;
    }
  };

// initial state
const initialState: HomeModuleType = {
  data: {
    home: null,
    location: [],
    recommend: [],
  },
  loading: true,
  error: null,
};

// reducer
// eslint-disable-next-line default-param-last
function home(state: HomeModuleType = initialState, action: homeAction): HomeModuleType {
  switch (action.type) {
    case GET_HOME_PENDING:
      return { ...state, loading: true };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          home: action.payload.homeRes || state.data.home,
          location: action.payload.locationRes,
          recommend: action.payload.recommendRes || state.data.recommend,
        },
      };
    case GET_HOME_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default home;
