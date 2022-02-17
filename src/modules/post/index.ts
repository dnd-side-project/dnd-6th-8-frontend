import { produce } from 'immer';
import { CREATE_POST, UPDATE_POST } from '../../constants';


// 액션 생성 함수
export const createPost = (data: any) => ({
  type: CREATE_POST,
  data,
});

export const updatePost = (data: any) => ({
  type: UPDATE_POST,
  data,
});

// 액션 객체들에 대한 타입을 선언
type PostAction = ReturnType<typeof createPost> | ReturnType<typeof updatePost>;

type PostState = {
  posts: any; 
};

export const initailState: PostState = {
  posts: null,
};

export const post = (action: PostAction, state: PostState = initailState): PostState => {
  return produce(state, (draft) => {
    switch (action && action.type) {
      case CREATE_POST:
        break;
      case UPDATE_POST:
        break;
      default:
    }
  });
};
