import { createSlice } from '@reduxjs/toolkit';

// Retrieve stored user data from session storage
const storedUser = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
  isAuthenticated: !!storedUser,
  user: storedUser || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // Update session storage on successful login
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    logout: (state) => {
      // Clear session storage on logout
      sessionStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
