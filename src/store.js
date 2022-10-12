import { configureStore } from '@reduxjs/toolkit';
import dashReducer from './redux/features/dash/dashSlice';
import { testApi } from './redux/services/data';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    dash: dashReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

setupListeners(store.dispatch);
