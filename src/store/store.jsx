import { configureStore } from '@reduxjs/toolkit';
import bwicsSlice from './bwicsSlice';

export const store = configureStore({
  reducer: {
    bwics: bwicsSlice,
  },
});
