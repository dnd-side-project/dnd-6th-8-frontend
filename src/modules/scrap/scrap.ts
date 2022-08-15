export {};
// import { ThunkAction } from 'redux-thunk';
// import { DayFeedModuleType } from '../../constants/index';

// import instance from '../../lib/axios';
// import { RootState } from '..';

// const GET_READ_SCRAP_PENDING = 'scrap/GET_READ_SCRAP_PENDING' as const;
// const GET_READ_SCRAP_SUCCESS = 'scrap/GET_READ_SCRAP_SUCCESS' as const;
// const GET_READ_SCRAP_FAILURE = 'scrap/GET_READ_SCRAP_FAILURE' as const;

// const readScrapPending = () => ({ type: GET_READ_SCRAP_PENDING });
// const readScrapSuccess = (payload: any) => ({ type: GET_READ_SCRAP_SUCCESS, payload });
// const readScrapFailure = (payload: any) => ({ type: GET_READ_SCRAP_FAILURE, error: true, payload });

// type readScrapAction =
//   | ReturnType<typeof readScrapPending>
//   | ReturnType<typeof readScrapSuccess>
//   | ReturnType<typeof readScrapFailure>;

// export const readDayFeed =
//   (id: string): ThunkAction<void, RootState, null, readScrapAction> =>
//   async (dispatch) => {
//     try {
//       dispatch(readScrapPending());
//       console.log('요청 이전 id ', id);
//       const response = await instance.get(`/api/v1/archives/${id}/scrap`);
//       console.log('스크랩', response);
//       dispatch(readScrapSuccess(response));
//     } catch (e) {
//       dispatch(readScrapFailure(e));
//       throw e;
//     }
//   };

// // 초기 상태
// const initailState: DayFeedModuleType = {
//   data: null,
//   loading: false,
//   error: false,
// };

// // 리듀서
// // eslint-disable-next-line default-param-last
// function dayFeed(state: DayFeedModuleType = initailState, action: readDayFeedAction) {
//   switch (action.type) {
//     case GET_READ_SCRAP_PENDING:
//       return { ...state, loading: true };
//     case GET_READ_SCRAP_SUCCESS:
//       console.log('payload', action.payload);
//       return { ...state, data: action.payload, loading: false };
//     case GET_READ_SCRAP_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }

// export default dayFeed;
