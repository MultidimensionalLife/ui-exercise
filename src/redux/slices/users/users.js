import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  fetching: false,
  hasError: false,
};

const slice = {
  name: "users",
  initialState,
  reducers: {
    create: (state, action) => {
      state.data.push({
        ...action.payload,
        id: Date.now().toString(),
        createdOn: new Date().toDateString(),
      });
    },
  },
};

export const usersSlice = createSlice(slice);

export const { create } = usersSlice.actions;

export default usersSlice.reducer;
