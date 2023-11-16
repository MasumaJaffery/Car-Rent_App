import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { setToken } from './tokenSlice';

import itemAPI from '../../API/itemAPI';

const initialState = {
  id: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  userStorage: null,
  idStorage: null,
};

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${itemAPI.baseURL}${itemAPI.login}`,
        { user: formData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.status.code === 200 && response.data.status.message === 'Logged in sucessfully.') {
        // destructure the response data to get the token and user
        const token = response.headers.authorization;
        const user = response.data.data;
        toast.success(`Successful login. Welcome, ${user.name}`);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        thunkAPI.dispatch(setToken(token));

        // Return the user data
        return response.data;
      } else {
        toast.error(`Login failed. ${response.data.status.message}`);
        return thunkAPI.rejectWithValue(response.data.status.message);
      }
    } catch (error) {
      toast.error(`Login failed. ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLocalStorage: (state, action) => {
      state.userStorage = JSON.parse(action.payload).name;
      state.idStorage = JSON.parse(action.payload).id;
    },
  },
  extraReducers(builder) {
    // loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.id = action.payload.data.id;
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.data.name;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setLocalStorage } = authSlice.actions;

export default authSlice.reducer;