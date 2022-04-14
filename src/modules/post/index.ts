export {}
// import axios from 'axios';
// import { produce } from 'immer';
// import { CREATE_POST, UPDATE_POST } from '../../constants';

// // 액션 생성 함수
// export const createPost = async (data: any) => {
//   const response = await axios.post(`api/post/create`, data);
//   return {
//     type: CREATE_POST,
//     payload: response.data,
//   };
// };

// export const updatePost = async (data: any) => {
//   const response = await axios.post(`api/post/update`, data);
//   return {
//     type: UPDATE_POST,
//     payload: response.data,
//   };
// };

// // 액션 객체들에 대한 타입을 선언
// // type PostAction = ReturnType<typeof createPost> | ReturnType<typeof updatePost>;

// type PostState = {
//   posts: any;
// };

// export const initailState: PostState = {
//   posts: null,
// };

// // Post Reducer
// export const post = (action: any, state: PostState = initailState): PostState => {
//   return produce(state, (draft) => {
//     switch (action && action.type) {
//       case CREATE_POST:
//         draft.posts = action.payload;
//         break;
//       case UPDATE_POST:
//         draft.posts = action.payload;
//         break;
//       default:
//         break;
//     }
//   });
// };
