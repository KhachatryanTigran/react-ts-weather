import { createSlice } from "@reduxjs/toolkit";

type Popup = {
  isShow: boolean;
  date: string;
};
const initialState: Popup = {
  isShow: false,
  date: "",
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupShow(state, action) {
      state.isShow = !state.isShow;
      state.date = action.payload;
    },
  },
});
export const { popupShow } = popupSlice.actions;
export default popupSlice.reducer;
