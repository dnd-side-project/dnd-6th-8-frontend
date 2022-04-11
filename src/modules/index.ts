import { combineReducers } from 'redux';
import userInformation from './user/userinfomation';
import wallpaper from './post/wallpaper';
// import myArchivesReducer from './post/archives';

const rootReducer = combineReducers({
  wallpaper,
  userInformation, 
  // myArchivesReducer, 

});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
