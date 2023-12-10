import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthToken: (state, actions) => {
      state.accessToken = actions.payload;
    },

    setAuthUser: (state, actions) => {
      state.user = actions.payload;
    },

    setLoginResponse: (state, actions) => {
      state.accessToken = actions.payload.accessToken;
      state.user = actions.payload.user;
    },

    flushAuth: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});
export const { setAuthToken, setAuthUser, setLoginResponse, flushAuth } =
  authSlice.actions;
export default authSlice.reducer;
