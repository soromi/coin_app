import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  detail: {},
};

export const name = "coin";
const slice = createSlice({
  name,
  initialState,
  reducers: {
    getCoinList: (state) => {
      state.list = [];
    },
    setCoinList: (state, action) => {
      state.list = action.payload;
    },
    getCoinDetail: () => {},
    setCoinDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const action = slice.actions;
