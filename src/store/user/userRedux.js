import { createSlice } from "@reduxjs/toolkit";

// clean up iffe
(() => {
  const getUserCache = localStorage.getItem("persist:root");
  const user = getUserCache ? JSON.parse(getUserCache) : null;
  if (user && user.currentUser === "null") localStorage.removeItem("persist:root");
})();

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    loginErrorMessage: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.loginErrorMessage = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.loginErrorMessage = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.loginErrorMessage =
        action.payload || "Something went wrong,please try later";
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      localStorage.removeItem("persist:root");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
