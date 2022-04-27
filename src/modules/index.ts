import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInformation from './user/userinfomation';
import wallpaper from './post/wallpaper';
import myArchivesReducer from './post/archives';
import readWallPaperReducer from './post/readwallpaper';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInformation'],
};

const rootReducer = combineReducers({
  wallpaper,
  userInformation,
  myArchivesReducer,
  readWallPaperReducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
