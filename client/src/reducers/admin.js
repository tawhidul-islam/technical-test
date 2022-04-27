import { createSlice } from "@reduxjs/toolkit";

export const admin = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    isChangePasswordLoading: false,
    admin: {},
    errors: false,
    isSuccess: false,
    isChangePasswordSuccess: false,
    isChangePasswordError: false,
    activityLogs: [],
  },
  reducers: {
    // add Admin
    addAdminStart: (state) => {
      state.isLoading = true;
    },
    addAdminSuccess: (state, action) => {
      state.isSuccess = true;
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.isLoading = false;
      state.admin = action?.payload;
    },
    addAdminFailure: (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.errors = action?.payload;
    },

    // update profile
    updateProfileStart: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    updateProfileSuccess: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.isSuccess = true;
      state.isLoading = false;
      state.admin = action?.payload;
    },
    updateProfileFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // get single Admin
    getAdminStart: (state) => {
      state.isLoading = true;
    },
    getAdminSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.admin = action?.payload;
    },
    getAdminFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },

    // chnage password
    changePasswordStart: (state) => {
      state.isLoading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.isChangePasswordLoading = true;
      state.isChangePasswordSuccess = true;
      state.isChangePasswordError = false;
      state.admin = action?.payload;
    },
    changePasswordFailure: (state, action) => {
      state.isChangePasswordLoading = false;
      state.isChangePasswordSuccess = false;
      state.isChangePasswordError = action?.payload;
    },

    // chnage password
    getActivityLogsStart: (state) => {
      state.isLoading = true;
    },
    getActivityLogsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.activityLogs = action?.payload;
    },
    getActivityLogsFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action?.payload;
    },
  },
});

export const {
  addAdminStart,
  addAdminSuccess,
  addAdminFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  getAdminStart,
  getAdminSuccess,
  getAdminFailure,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailure,
  getActivityLogsStart,
  getActivityLogsSuccess,
  getActivityLogsFailure,
} = admin.actions;

export default admin.reducer;
