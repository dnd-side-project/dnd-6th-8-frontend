import { combineReducers } from 'redux';
import userInformation from './user/userinfomation';
import wallpaper from './post/wallpaper';

const rootReducer = combineReducers({
  wallpaper,
  userInformation, 
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
