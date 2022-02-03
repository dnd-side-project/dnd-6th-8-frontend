import { produce } from 'immer';
import { CREATE_POST, UPDATE_POST } from '../../constants';


// 액션 생성 함수
export const createPost = (data: object) => ({
  type: CREATE_POST,
  data,
});

export const updatePost = (data: object) => ({
  type: UPDATE_POST,
  data,
});

// 액션 객체들에 대한 타입을 선언
type PostAction = ReturnType<typeof createPost> | ReturnType<typeof updatePost>;

type PostState = {
  posts: null | object;
};

export const initailState: PostState = {
  posts: null,
};

export const post = (action: PostAction, state: PostState = initailState): PostState => {
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_POST:
        break;
      case UPDATE_POST:
        break;
      default:
    }
  });
};
