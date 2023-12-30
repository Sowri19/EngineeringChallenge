import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import machineDataReducer from "../slices/machineDataSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  machineData: machineDataReducer,
  // other reducers/slices
});

export default rootReducer;
