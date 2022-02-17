import axios from 'axios';
import { produce } from 'immer';
import { SIGNUP_USER, SIGNIN_USER } from '../../constants';

// 액션 생성 함수
export const signupUser = async (data: any) => {
  const response = await axios.post(`api/user/signup`, data);
  return {
    type: SIGNUP_USER,
    payload : response.data, 
  };
};

export const signinUser = async(data: any) => {
  const response = await axios.post(`api/user/login`, data);
  return {
    type: SIGNIN_USER,
    payload : response.data, 
  };
};

// 액션 객체들에 대한 타입을 선언
// type UserAction = ReturnType<typeof signupUser> | ReturnType<typeof signinUser>;

type me = {
  name: string;
  id: number;
};

type UserState = {
  me: me | undefined;
};

export const initailState: UserState = {
  me: undefined,
};

// User Reducer
export const user = (action: any, state: UserState = initailState): any => {
  return produce(state, (draft) => {
    switch (action && action.type) {
      case SIGNUP_USER:
        draft.me = action.payload;
        break;
      case SIGNIN_USER:
        draft.me = action.payload; 
        break;
      default:
        break;
    }
  });
};
