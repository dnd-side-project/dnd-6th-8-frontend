import { combineReducers } from 'redux';
import { user } from './user';
import wallpaper from './post/wallpaper';

const rootReducer = combineReducers({
  wallpaper,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
