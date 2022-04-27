import {
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
} from "../reducers/admin";
import { authSuccess } from "../reducers/auth";
import * as api from "../api";

// action creator for signup
export const signup = (newAdmin) => async (dispatch) => {
  try {
    dispatch(addAdminStart());

    const { data } = await api.addAdmin(newAdmin);

    dispatch(addAdminSuccess(data));
    dispatch(authSuccess(data));
  } catch (error) {
    dispatch(
      addAdminFailure({
        name: error?.response?.data?.errors?.name?.msg,
        email: error?.response?.data?.errors?.email?.msg,
        password: error?.response?.data?.errors?.password?.msg,
      })
    );
  }
};

// action creator for update profile
export const updateProfile = (updatedProfile, id) => async (dispatch) => {
  try {
    dispatch(updateProfileStart());

    const { data } = await api.updateProfile(updatedProfile, id);
    dispatch(updateProfileSuccess(data));
  } catch (error) {
    dispatch(
      updateProfileFailure({
        phone: "phone?.msg",
      })
    );
  }
};

// action creator for update profile
export const getAdmin = (id) => async (dispatch) => {
  try {
    dispatch(getAdminStart());

    const { data } = await api.getAdmin(id);
    dispatch(getAdminSuccess(data));
  } catch (error) {
    dispatch(
      getAdminFailure({
        message: "Something went wrong",
      })
    );
  }
};

// action creator for chnage password
export const changePassword = (id, state) => async (dispatch) => {
  try {
    dispatch(changePasswordStart());

    const { data } = await api.changePassword(id, state);
    dispatch(changePasswordSuccess(data));
  } catch (error) {
    if (error?.response?.data?.errors) {
      dispatch(
        changePasswordFailure({
          newPassword: error?.response?.data?.errors?.newPassword?.msg,
        })
      );
    } else {
      dispatch(
        changePasswordFailure({
          oldPassword: error?.response?.data?.message,
        })
      );
    }
  }
};

// action creator for activity logs
export const getActivityLogs = (id, size, page) => async (dispatch) => {
  try {
    dispatch(getActivityLogsStart());

    const { data } = await api.getActivityLogs(id, size, page);

    dispatch(getActivityLogsSuccess(data));
  } catch (error) {
    dispatch(getActivityLogsFailure({ message: "Something went wrong!" }));
  }
};
