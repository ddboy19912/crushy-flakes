import { configureStore } from '@reduxjs/toolkit';
import dashReducer from './redux/features/dash/dashSlice';

export const store = configureStore({
  reducer: {
    dash: dashReducer,
  },
});
