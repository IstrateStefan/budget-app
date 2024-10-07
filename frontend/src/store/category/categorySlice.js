import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getAllCategories = createAsyncThunk(
  'category/getAllCategoires',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/categories`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    isLoading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.categories;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload.errors;
      });
  },
});

export default categorySlice.reducer;
