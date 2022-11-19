import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { modalReducer, todoReducer } from '../Slices';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
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
