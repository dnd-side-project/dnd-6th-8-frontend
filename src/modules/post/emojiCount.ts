import { ThunkAction } from 'redux-thunk';
import { EmoJiReadDataType, EmojiReadDataModuleType } from '../../constants/index';

import instance from '../../lib/axios';
import { RootState } from '..';

const POST_READ_EMOJI_INFO_PENDING = 'post/POST_READ_EMOJI_INFO_PENDING' as const;
const POST_READ_EMOJI_INFO_SUCCESS = 'post/POST_READ_EMOJI_INFO_SUCCESS' as const;
const POST_READ_EMOJI_INFO_FAILURE = 'post/POST_READ_EMOJI_INFO_FAILURE' as const;

const readEmojiInfoPending = () => ({ type: POST_READ_EMOJI_INFO_PENDING });
const readEmojiInfoSuccess = (payload: any) => ({ type: POST_READ_EMOJI_INFO_SUCCESS, payload });
const readEmojiInfoFailure = (payload: any) => ({ type: POST_READ_EMOJI_INFO_FAILURE, error: true, payload });

type readEmojiAction =
  | ReturnType<typeof readEmojiInfoPending>
  | ReturnType<typeof readEmojiInfoSuccess>
  | ReturnType<typeof readEmojiInfoFailure>;

export const readEmojiInfo =
  (id: string): ThunkAction<void, RootState, null, readEmojiAction> =>
  async (dispatch) => {
    try {
      dispatch(readEmojiInfoPending());
      console.log('이모지 요청 이전 id ', id);
      const response = await instance.get(`/api/v1/archives/${id}/getEmojisListOfArchives`);
      console.log('이모지 데이터 읽기', response);
      dispatch(readEmojiInfoSuccess(response));
    } catch (e) {
      dispatch(readEmojiInfoFailure(e));
      throw e;
    }
  };

// 초기 상태
const initailState: EmojiReadDataModuleType = {
  data: [],
  loading: false,
  error: false,
};

// 리듀서
// eslint-disable-next-line default-param-last
function emojiCounts(state: EmojiReadDataModuleType = initailState, action: readEmojiAction) {
  switch (action.type) {
    case POST_READ_EMOJI_INFO_PENDING:
      return { ...state, loading: true };
    case POST_READ_EMOJI_INFO_SUCCESS:
      console.log(action.payload);
      return { ...state, data: [...action.payload], loading: false };
    case POST_READ_EMOJI_INFO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default emojiCounts;
