import { createSlice } from "@reduxjs/toolkit";

// set up quizzes slice
const options = {
  name: "quizzes",
  initialState: {},
  reducers: {
    addQuiz: (state, action) => {
      state[action.payload.id] = { ...action.payload };
    }
  }
};

const quizzesSlice = createSlice(options);

// export selector
export const selectQuizzes = (state) => state.quizzes;
// export action creators
export const { addQuiz } = quizzessSlice.actions;
// export reducer
export default quizzessSlice.reducer;
