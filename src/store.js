import { configureStore } from '@reduxjs/toolkit';
import dashReducer from './redux/features/dash/dashSlice';
import { mainApi } from './redux/services/data';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    dash: dashReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

setupListeners(store.dispatch);
