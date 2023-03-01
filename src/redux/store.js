import { configureStore } from "@reduxjs/toolkit";

import users from "./slices/users/users";

const store = configureStore({
  reducer: {
    users,
  },
});

export default store;
