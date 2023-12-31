import { createSlice } from "@reduxjs/toolkit";
// Inside your authSlice.js

const initialState = {
  isLoggedIn: false,

  uid: null, // Add a field for uid
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      state.isLoggedIn = false;

      state.uid = null; // Reset uid
    },
    // ... other reducers
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
