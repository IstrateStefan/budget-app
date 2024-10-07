import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getBudget = createAsyncThunk(
  'budget/getBudget',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/budget/${userId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue({ ...(error.response && error.response.data) });
    }
  }
);

export const changeBudgetAmount = createAsyncThunk(
  'budget/changeBudgetAmount',
  async ({ userId, type, amount }, { rejectWithValue }) => {
    try {
      console.log(userId);
      console.log(type);
      console.log(amount);
      // const response = await axios.post(`${API_URL}/budget/${userId}`, {});
    } catch (error) {
      return rejectWithValue({ ...(error.response && error.response.data) });
    }
  }
);

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: null,
    loading: true,
    errors: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBudget.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBudget.fulfilled, (state, action) => {
        state.loading = false;
        state.budget = action.payload.data.budget;
      })
      .addCase(getBudget.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      });
  },
});

export default budgetSlice.reducer;
