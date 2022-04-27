import { configureStore } from "@reduxjs/toolkit";

import style from "./style";
import admin from "./admin";
import auth from "./auth";
import user from "./user";

export default configureStore({
  reducer: {
    style,
    admin,
    auth,
    user,
  },
});
