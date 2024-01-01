import { createSlice } from "@reduxjs/toolkit";

const machineDataSlice = createSlice({
  name: "machineData",
  initialState: {
    data: undefined,
    history: [],
  },
  reducers: {
    updateData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetData: (state) => {
      state.data = undefined;
      state.history = [];
    },
    setScores: (state, action) => {
      if (state.data) {
        state.data.scores = action.payload;
      }
    },
    updateHistory: (state, action) => {
      state.history = action.payload;
    },
    addHistoryRecord: (state, action) => {
      state.history.push(action.payload);
    },
  },
});

export const {
  updateData,
  resetData,
  setScores,
  updateHistory,
  addHistoryRecord,
} = machineDataSlice.actions;
export default machineDataSlice.reducer;
