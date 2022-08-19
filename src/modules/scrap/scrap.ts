import { ThunkAction } from 'redux-thunk';
import { ScrapDataModule, ScrapDataType } from '../../constants/index';

import instance from '../../lib/axios';
import { RootState } from '..';

const GET_READ_SCRAP_PENDING = 'scrap/GET_READ_SCRAP_PENDING' as const;
const GET_READ_SCRAP_SUCCESS = 'scrap/GET_READ_SCRAP_SUCCESS' as const;
const GET_READ_SCRAP_FAILURE = 'scrap/GET_READ_SCRAP_FAILURE' as const;

const getScrapListPending = () => ({ type: GET_READ_SCRAP_PENDING });
const getScrapListSuccess = (payload: any) => ({ type: GET_READ_SCRAP_SUCCESS, payload });
const getScrapListFailure = (payload: any) => ({ type: GET_READ_SCRAP_FAILURE, error: true, payload });

type readScrapAction =
  | ReturnType<typeof getScrapListPending>
  | ReturnType<typeof getScrapListSuccess>
  | ReturnType<typeof getScrapListFailure>;

export const getScrapList = (): ThunkAction<void, RootState, null, readScrapAction> => async (dispatch) => {
  try {
    dispatch(getScrapListPending());
    const response = await instance.get(`/api/v1/archives/scraps`);
    console.log('스크랩', response);
    dispatch(getScrapListSuccess(response));
  } catch (e) {
    dispatch(getScrapListFailure(e));
    throw e;
  }
};

// 초기 상태
const initailState: ScrapDataModule = {
  data: {
    scrapPreviewDto: null,
    countMyScraps: null,
  },
  loading: false,
  error: null,
};

// 리듀서
// eslint-disable-next-line default-param-last
function Scrap(state: ScrapDataModule = initailState, action: readScrapAction) {
  switch (action.type) {
    case GET_READ_SCRAP_PENDING:
      return { ...state, loading: true };
    case GET_READ_SCRAP_SUCCESS:
      console.log('payload', action.payload);
      return { ...state, data: action.payload, loading: false };
    case GET_READ_SCRAP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default Scrap;
