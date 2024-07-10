import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const submitBidAPI = () =>
  Promise.resolve({
    status: 'success',
  });

export const submitBid = createAsyncThunk(
  'submitBid',
  async (args, thunkAPI) => {
    console.log(args);
    const data = await submitBidAPI();
    console.log('Response', data);
    const inFlightBids = thunkAPI.getState().bwics.inFlightBids;

    if (data.status === 'success') {
      const index = inFlightBids.findIndex(
        (bid) => bid.listId === args.listId && bid.bondId === args.bondId
      );
      const newBid = {
        ...args,
        bid: Number(args.value),
      };
      if (index > -1) {
        return inFlightBids.map((bid, i) =>
          i === index ? { ...newBid } : { ...bid }
        );
      } else {
        return [...inFlightBids, newBid];
      }
    }
    return [];
  }
);

export const submitBidReducers = {
  [submitBid.fulfilled]: (state, action) => {
    state.inFlightBids = action.payload;
  },
};
