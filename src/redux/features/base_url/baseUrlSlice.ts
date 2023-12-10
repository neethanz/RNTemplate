import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base_url: process.env.API_URL,
};

const baseUrlSlice = createSlice({
  name: "base_url",
  initialState: initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.base_url = action.payload;
    },
  },
});
export const { setBaseUrl } = baseUrlSlice.actions;
export default baseUrlSlice.reducer;
