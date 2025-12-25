import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    moviesName: [],
    moviesResult: [],
  },
  reducers: {
    gptSearchToggle(state) {
      state.gptSearch = !state.gptSearch;
    },
    addGptMoviesResult(state, actions) {
      const {moviesName, moviesResult} = actions.payload;
      state.moviesResult = moviesResult;
      state.moviesName = moviesName;
    },
  },
});

export const { gptSearchToggle, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
