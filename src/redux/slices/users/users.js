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
    update: (state, action) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.id
      );

      console.log("Update", state);

      state.data[index] = {
        ...state.data[index],
        ...action.payload.data,
      };
    },
    remove: (state, action) => {
      const ids = action.payload.ids;

      state.data = state.data.filter((user) => !ids.includes(user.id));
    },
  },
};

export const usersSlice = createSlice(slice);

export const { create, update, remove } = usersSlice.actions;

export default usersSlice.reducer;
