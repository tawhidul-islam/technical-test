import * as api from "../api";
import {
  authStart,
  authSuccess,
  authFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from "../reducers/auth";

export const login = (userCredential) => async (dispatch) => {
  try {
    dispatch(authStart());

    const { data } = await api.login(userCredential);

    dispatch(authSuccess(data));
  } catch (error) {
    const { message } = error.response.data;
    dispatch(authFailure({ email: message }));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutStart());
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error?.response?.data));
  }
};
