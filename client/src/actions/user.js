import {
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
} from "../reducers/user";
import * as api from "../api";

// action creator for signup
export const addUser = (newUser, adminId) => async (dispatch) => {
  try {
    dispatch(addUserStart());

    const { data } = await api.addUser(newUser, adminId);

    dispatch(addUserSuccess(data));
  } catch (error) {
    dispatch(
      addUserFailure({
        name: error?.response?.data?.errors?.name?.msg,
        phone: error?.response?.data?.errors?.phone?.msg,
        dob: error?.response?.data?.errors?.dob?.msg,
        email: error?.response?.data?.errors?.email?.msg,
      })
    );
  }
};

// action creator for get users
export const getUsers = (size, page, search) => async (dispatch) => {
  try {
    dispatch(getUsersStart());

    const { data } = await api.getUsers(size, page, search);

    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(
      getUsersFailure({
        common: "Something went wrong!",
      })
    );
  }
};

// delete user
export const deleteUser = (id, adminId) => async (dispatch) => {
  try {
    dispatch(deleteUserStart());

    const { data } = await api.deleteUser(id, adminId);

    dispatch(deleteUserSuccess(data));
  } catch (error) {
    dispatch(
      deleteUserFailure({
        common: "Something went wrong!",
      })
    );
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch(getUserStart());

    const { data } = await api.getUser(id);

    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(
      getUserFailure({
        common: "Something went wrong!",
      })
    );
  }
};

export const getUsersOnly = () => async (dispatch) => {
  try {
    dispatch(getUsersOnlyStart());

    const { data } = await api.getUsersOnly();

    dispatch(getUsersOnlySuccess(data));
  } catch (error) {
    dispatch(
      getUsersOnlyFailure({
        common: "Something went wrong!",
      })
    );
  }
};

export const updateUser = (id, updatedUser, adminId) => async (dispatch) => {
  try {
    dispatch(updateUserStart());

    const { data } = await api.updateUser(id, updatedUser, adminId);

    dispatch(updateUserSuccess(data));
  } catch (error) {
    dispatch(
      updateUserFailure({
        common: "Something went wrong!",
      })
    );
  }
};
