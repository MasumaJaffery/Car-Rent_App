// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers if present
  },
  // other store configurations
});

export default store;
