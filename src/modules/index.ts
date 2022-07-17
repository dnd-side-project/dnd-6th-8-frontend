import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInformation from './user/userinfomation';
import wallpaper from './post/wallpaper';
import myArchivesReducer from './post/archives';
import readWallPaperReducer from './post/readwallpaper';
import dayFeed from './post/dayfeed';
import home from './post/home';
import emojiCounts from './post/emojiCount';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInformation', 'readWallPaperReducer', 'myArchivesReducer', 'wallpaper', 'dayFeed'],
};

const rootReducer = combineReducers({
  wallpaper,
  userInformation,
  myArchivesReducer,
  readWallPaperReducer,
  dayFeed,
  home,
  emojiCounts,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
