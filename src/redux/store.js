// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import tokenReducer from './slices/tokenSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer
    // other reducers if present
  },
  // other store configurations
});

export default store;
