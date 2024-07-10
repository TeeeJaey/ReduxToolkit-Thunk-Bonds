import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getBidsAPI = () =>
  Promise.resolve({
    bids: [
      {
        listId: '1',
        bondId: '1',
        bid: 1.5,
      },
      {
        listId: '1',
        bondId: '2',
        bid: 3.5,
      },
      {
        listId: '2',
        bondId: '2',
        bid: 2.25,
      },
    ],
  });

export const getBids = createAsyncThunk('getBids', async (arg, thunkAPI) => {
  const data = await getBidsAPI();
  console.log('Response', data);
  return data.bids;
});

export const getBidsReducers = {
  [getBids.fulfilled]: (state, action) => {
    state.bids = action.payload;
  },
};
