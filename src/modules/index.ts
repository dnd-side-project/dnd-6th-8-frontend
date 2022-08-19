import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInformation from './user/userinfomation';
import wallpaper from './post/wallpaper';
import days from './post/days';
import myArchivesReducer from './post/archives';
import mypage from './user/mypage';
import readWallPaperReducer from './post/readwallpaper';
import dayFeed from './post/dayfeed';
import home from './post/home';
import emojiCounts from './post/emojiCount';
import scrap from './scrap/scrap';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInformation', 'readWallPaperReducer', 'myArchivesReducer', 'dayFeed'],
};

const rootReducer = combineReducers({
  wallpaper,
  userInformation,
  myArchivesReducer,
  mypage,
  readWallPaperReducer,
  dayFeed,
  home,
  days,
  emojiCounts,
  scrap,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
