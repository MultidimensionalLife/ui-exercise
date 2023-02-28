// @flow

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { UsersState } from "./types";

export const createUser: any = createAsyncThunk(
  "users/create",
  async ({}) => {}
);

const initialState: UsersState = {
  data: [],
  fetching: false,
  hasError: false,
};

export const usersSlice: any = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, payload) => {
      state.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
