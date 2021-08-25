import { createSlice } from "@reduxjs/toolkit";

// set up quizzes slice
const options = {
  name: "cards",
  initialState: {},
  reducers: {
    addCard: (state, action) => {
      state[action.payload.id] = action.payload;
    }
  }
};

const cardsSlice = createSlice(options);

// export selector
export const selectCards = (state) => state.cards;

// export action creators
export const { selectXXX } = cardsSlice.actions;
// export reducer
export default cardsSlice.reducer;
