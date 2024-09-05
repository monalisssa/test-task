import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsSlice';
import commentsReducer from './reducers/commentsSlice';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
