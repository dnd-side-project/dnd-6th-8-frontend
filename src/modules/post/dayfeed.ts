import { ThunkAction } from 'redux-thunk';
import { DayFeedDataType, DayFeedModuleType } from '../../constants/index';

import instance from '../../lib/axios';
import { RootState } from '..';

const POST_READ_DAYFEED_PENDING = 'readwallpaper/POST_READ_DAYFEED_PENDING' as const;
const POST_READ_DAYFEED_SUCCESS = 'readwallpaper/POST_READ_DAYFEED_SUCCESS' as const;
const POST_READ_DAYFEED_FAILURE = 'readwallpaper/POST_READ_DAYFEED_FAILURE' as const;

const readDayFeedPending = () => ({ type: POST_READ_DAYFEED_PENDING });
const readDayFeedSuccess = (payload: any) => ({ type: POST_READ_DAYFEED_SUCCESS, payload });
const readDayFeedFailure = (payload: any) => ({ type: POST_READ_DAYFEED_FAILURE, error: true, payload });

type readDayFeedAction =
  | ReturnType<typeof readDayFeedPending>
  | ReturnType<typeof readDayFeedSuccess>
  | ReturnType<typeof readDayFeedFailure>;

export const readDayFeed =
  (id: string, day: string): ThunkAction<void, RootState, null, readDayFeedAction> =>
  async (dispatch) => {
    try {
      dispatch(readDayFeedPending());
      const response = await instance.get(`/api/v1/archives/days/${id}`, {
        params: {
          archives: id,
          dayNumber: day,
        },
      });
      console.log('데이피드 읽기', response.data);
      dispatch(readDayFeedSuccess(response));
    } catch (e) {
      dispatch(readDayFeedFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: DayFeedModuleType = {
  data: [],
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function dayFeed(state: DayFeedModuleType = initailState, action: readDayFeedAction) {
  switch (action.type) {
    case POST_READ_DAYFEED_PENDING:
      return { ...state, loading: true };
    case POST_READ_DAYFEED_SUCCESS:
      console.log(action.payload);
      return { ...state, data: [...action.payload], loading: false };
    case POST_READ_DAYFEED_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default dayFeed;
