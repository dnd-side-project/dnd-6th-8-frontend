import { produce } from 'immer';
import { SIGNUP_USER, SIGNIN_USER } from '../../constants';

export const signupUser = (data: any) => ({
  type: SIGNUP_USER,
  data,
});

export const signinUser = (data: any) => ({
  type: SIGNIN_USER,
  data,
});

// 액션 객체들에 대한 타입을 선언
type UserAction = ReturnType<typeof signupUser> | ReturnType<typeof signinUser>;

type me = {
  name : string; 
  id : number; 
}

type UserState = {
  me: me | undefined;
};

export const initailState: UserState = {
  me: undefined,
};

export const user = (action: UserAction, state: UserState = initailState): any => {
  return produce(state, (draft) => {
    switch (action && action.type) {
      case SIGNUP_USER:
        // draft.me = null;
        break;
      case SIGNIN_USER:
        break;
      default:
        break;
    }
  });
};
