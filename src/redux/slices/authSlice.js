import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => ({
      ...state,
      user: action.payload.user,
      isAuthenticated: true,
    }),
    loginFailure: (state) => ({
      ...state,
      isAuthenticated: false,
    }),
    logout: (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }),
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
