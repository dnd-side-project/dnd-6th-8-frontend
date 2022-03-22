import axios from 'axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { produce } from 'immer';
import { SIGNUP_USER, SIGNIN_USER } from '../../constants';
import * as api from '../../lib/axios';

// 모든 액션 객체들에 대한 타입

// 리덕스 모듈에서 관리할 상태의 타입
type userState = {
  token: string;
};

// 액션 타입
const USER_LOGIN = 'user/USER_LOGIN' as const;
const USER_LOGIN_SUCCESS = 'user/USER_LOGIN_SUCCESS' as const;
const USER_LOGIN_FAILURE = 'user/USER_LOGIN_FAILURE' as const;

// 액션생성함수

// thunk 함수
const userLogin = (type: string) => async (dispatch: any) => {
  dispatch({ type: USER_LOGIN });
  try {
    const response = await api.userLogin(type);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

// 액션 생성 함수
export const signupUser = async (data: any) => {
  const response = await axios.post(`api/user/signup`, data);
  return {
    type: SIGNUP_USER,
    payload: response.data,
  };
};

export const signinUser = async (data: any) => {
  const response = await axios.post(`api/user/login`, data);
  return {
    type: SIGNIN_USER,
    payload: response.data,
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
