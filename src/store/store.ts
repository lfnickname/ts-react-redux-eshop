import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketSlice from './reducer/basketSlice';
import dataSlice from './reducer/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
    basket: basketSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
