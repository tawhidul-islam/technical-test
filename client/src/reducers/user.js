import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    isAddUserLoading: false,
    isAddUserSuccess: false,
    isAddUserError: false,
    user: {},
    users: [],

    isGetUsersLoading: false,
    isGetUsersSuccess: false,
    isGetUsersError: false,

    isDeleteUserLoading: false,
    isDeleteUserSuccess: false,
    isDeleteUserError: false,

    isGetUserLoading: false,
    isGetUserSuccess: false,
    isGetUserError: false,

    isGetUsersOnlyLoading: false,
    isGetUsersOnlySuccess: false,
    isGetUsersOnlyError: false,

    isUpdateUSerLoading: false,
    isUpdateUSerSuccess: false,
    isUpdateUSerError: false,
  },
  reducers: {
    // add Admin
    addUserStart: (state) => {
      state.isAddUserLoading = true;
    },
    addUserSuccess: (state, action) => {
      state.isAddUserLoading = false;
      state.isAddUserSuccess = true;
      state.user = action?.payload;
    },
    addUserFailure: (state, action) => {
      state.isAddUserLoading = false;
      state.isAddUserError = action?.payload;
    },

    // get all Admin
    getUsersStart: (state) => {
      state.isGetUsersLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isGetUsersLoading = false;
      state.isGetUsersSuccess = true;
      state.users = action?.payload;
    },
    getUsersFailure: (state, action) => {
      state.isGetUsersLoading = false;
      state.isGetUsersError = action?.payload;
    },

    // get all Admin
    deleteUserStart: (state) => {
      state.isDeleteUserLoading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.isDeleteUserLoading = false;
      state.isDeleteUserSuccess = true;
      state.users = action?.payload;
    },
    deleteUserFailure: (state, action) => {
      state.isDeleteUserLoading = false;
      state.isDeleteUserError = action?.payload;
    },

    // get all Admin
    getUserStart: (state) => {
      state.isGetUserLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isGetUserLoading = false;
      state.isGetUserSuccess = true;
      state.user = action?.payload;
    },
    getUserFailure: (state, action) => {
      state.isGetUserLoading = false;
      state.isGetUserError = action?.payload;
    },

    // get all Admin
    getUsersOnlyStart: (state) => {
      state.isGetUsersOnlyLoading = true;
    },
    getUsersOnlySuccess: (state, action) => {
      state.isGetUsersOnlyLoading = false;
      state.isGetUsersSuccess = true;
      state.users = action?.payload;
    },
    getUsersOnlyFailure: (state, action) => {
      state.isUpdateUserLoading = false;
      state.isGetUserError = action?.payload;
    },

    updateUserStart: (state) => {
      state.isUpdateUserLoading = true;
    },
    updateUserSuccess: (state, action) => {
      state.isUpdateUserLoading = false;
      state.isUpdateUserSuccess = true;
      state.user = action?.payload;
    },
    updateUserFailure: (state, action) => {
      state.isUpdateUserLoading = false;
      state.isUpdateUserError = action?.payload;
    },
  },
});

export const {
  addUserStart,
  addUserSuccess,
  addUserFailure,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  getUsersOnlyStart,
  getUsersOnlySuccess,
  getUsersOnlyFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = user.actions;

export default user.reducer;
