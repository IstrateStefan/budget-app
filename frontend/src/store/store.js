import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import categoryReducer from './category/categorySlice';
import budgetReducer from './budget/budgetSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    budget: budgetReducer,
  },
});

export default store;
