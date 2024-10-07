import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import decode from '../../utils/jwtDecode';

const API_URL = 'http://localhost:5000';

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        username,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({ ...(error.response && error.response.data) });
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue({ ...(error.response && error.response.data) });
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { dispatch }) => {
    localStorage.removeItem('token');
    dispatch(logout());
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    errors: null,
    isAuthenticated: false,
  },
  reducers: {
    resetErrors: (state) => {
      state.errors = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      const decodedUser = decode(action.payload);
      state.user = decodedUser.user;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export const { resetErrors, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
