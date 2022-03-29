import { combineReducers } from 'redux';
import userInfoReducer from './user/userinfo';
import wallpaper from './post/wallpaper';

const rootReducer = combineReducers({
  wallpaper,
  userInfoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
