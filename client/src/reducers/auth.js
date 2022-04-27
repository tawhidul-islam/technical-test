import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isLoading: false,
    errors: false,
    isSuccess: false,
  },
  reducers: {
    // login reducer
    authStart: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.isLoading = false;
      state.auth = action?.payload;
      state.isSuccess = true;
      state.errors = false;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.errors = action?.payload;
      state.isSuccess = false;
    },

    // logout reducer
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isSuccess = true;
      localStorage.clear();
      state.auth = {};
    },
    logoutFailure: (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.errors = action?.payload;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = auth.actions;

export default auth.reducer;
