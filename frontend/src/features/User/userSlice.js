import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDefaultPassword: (state, action) => {
      state.defaultPassword = action.payload
    },
  },
});

export const { setDefaultPassword } = userSlice.actions;
export const getPassword = (state) => state.userPassword;
export default userSlice.reducer;