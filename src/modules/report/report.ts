import { ThunkAction } from 'redux-thunk';
import instance from '../../lib/axios';
import { RootState } from '..';

const REPORT_POST_REQUEST_PENDING = 'report/REPORT_POST_REQUEST_PENDING' as const;
const REPORT_POST_REQUEST_SUCCESS = 'report/REPORT_POST_REQUEST_SUCCESS' as const;
const REPORT_POST_REQUEST_FAILURE = 'report/REPORT_POST_REQUEST_FAILURE' as const;

const reportPostRequestPending = () => ({ type: REPORT_POST_REQUEST_PENDING });
const reportPostRequestSuccess = (payload: any) => ({ type: REPORT_POST_REQUEST_SUCCESS, payload });
const reportPostRequestFailure = (payload: any) => ({ type: REPORT_POST_REQUEST_FAILURE, error: true, payload });

type postReportAction =
  | ReturnType<typeof reportPostRequestPending>
  | ReturnType<typeof reportPostRequestSuccess>
  | ReturnType<typeof reportPostRequestFailure>;

export const postReport =
  (id: string, reportContent: string): ThunkAction<void, RootState, null, postReportAction> =>
  async (dispatch) => {
    try {
      dispatch(reportPostRequestPending());
      const data = {
        reportType: reportContent,
      };
      const response = await instance.post(`/api/v1/report/archives/${id}`, data);
      console.log('신고 이후', response);
      dispatch(reportPostRequestSuccess(response));
    } catch (e) {
      dispatch(reportPostRequestFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: any = {
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function postReports(state: any = initailState, action: postReportAction) {
  switch (action.type) {
    case REPORT_POST_REQUEST_PENDING:
      return { ...state, loading: true };
    case REPORT_POST_REQUEST_SUCCESS:
      return { ...state, loading: false };
    case REPORT_POST_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default postReports;
