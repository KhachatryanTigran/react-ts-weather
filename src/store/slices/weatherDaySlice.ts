import { createSlice } from "@reduxjs/toolkit";
type weatherDay = {
  days: number;
};
const initialState: weatherDay = { days: 7 };

export const weatherDaySlice = createSlice({
  name: "weatherDaySlice",
  initialState,
  reducers: {
    changeDays(state, action) {
      state.days = action.payload;
    },
  },
});
export const { changeDays } = weatherDaySlice.actions;
export default weatherDaySlice.reducer;
