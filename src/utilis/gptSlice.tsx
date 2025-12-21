import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    gptSearchToggle(state) {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const { gptSearchToggle } = gptSlice.actions;
export default gptSlice.reducer;
