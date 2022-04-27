import { createSlice } from "@reduxjs/toolkit";

export const style = createSlice({
  name: "style",
  initialState: {
    style: {
      sidebar: false,
      close: false,
    },
  },
  reducers: {
    sideBar: (state, action) => {
      if (action.payload.width < 601) {
        state.style.sidebar = !state.style.sidebar;
        state.style.close = !state.style.close;
      } else {
        state.style.sidebar = false;
      }
    },
  },
});

export const { sideBar } = style.actions;

export default style.reducer;
