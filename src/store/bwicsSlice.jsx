import { createSlice } from '@reduxjs/toolkit';
import { getBidsReducers } from '../thunks/getBids';
import { submitBidReducers } from '../thunks/submitBid';

const initialState = {
  bids: [],
  inFlightBids: [],
};

export const bwicsSlice = createSlice({
  name: 'bwics',
  initialState,
  reducers: {
    updateBids: (state, action) => state.bids.push(...action.payload),
    updateInFlightBids: (state, action) =>
      state.inFlightBids.push(...action.payload),
  },
  extraReducers: {
    ...getBidsReducers,
    ...submitBidReducers,
  },
});

export default bwicsSlice.reducer;
