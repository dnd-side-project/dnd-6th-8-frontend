import { produce } from 'immer';
import { SIGNUP_USER, SIGNIN_USER } from '../../constants';

export const signupUser = (data: object) => ({
  type: SIGNUP_USER,
  data,
});

export const signinUser = (data: object) => ({
  type: SIGNIN_USER,
  data,
});

// 액션 객체들에 대한 타입을 선언
type UserAction = ReturnType<typeof signupUser> | ReturnType<typeof signinUser>;

type UserState = {
  me: null | object;
};

export const initailState: UserState = {
  me: null,
};

export const user = (action: UserAction, state: UserState = initailState): UserState => {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.me = null; 
        break;
      case SIGNIN_USER:
        break;
      default:
        return state;
    }
  });
};
