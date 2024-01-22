import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  const AUTH_URL = "LOGIN_URL";
  dispatch(loginStart());
  try {
    const res = await axios.post(AUTH_URL, user);
    dispatch(loginSuccess(res.data.data));
  } catch (error) {
    dispatch(loginFailure(error?.response?.data?.message));
  }
};
