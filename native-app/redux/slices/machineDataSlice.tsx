import { createSlice } from "@reduxjs/toolkit";

const machineDataSlice = createSlice({
  name: "machineData",
  initialState: {
    data: undefined,
  },
  reducers: {
    updateData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetData: (state) => {
      state.data = undefined;
    },
    setScores: (state, action) => {
      if (state.data) {
        state.data.scores = action.payload;
      }
    },
  },
});

export const { updateData, resetData, setScores } = machineDataSlice.actions;
export default machineDataSlice.reducer;
