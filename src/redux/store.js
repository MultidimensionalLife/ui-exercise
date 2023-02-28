// @flow

import { configureStore } from "@reduxjs/toolkit";

import users from "./slices/users/users";

const store: any = configureStore({
  reducer: {
    users,
  },
});

export default store;
