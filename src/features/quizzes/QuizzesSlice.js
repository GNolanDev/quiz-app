import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/TopicsSlice";

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

// action creator for creating new quiz and adding to topic
export const quizCreated = (quiz) => {
  return (dispatch, getState) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz)); // adds full quiz detail
    dispatch(addQuizToTopic({ topicId: quiz.topicId, quizId: quiz.id })); // adds only required data from quiz
  };
};

// export selector
export const selectQuizzes = (state) => state.quizzes;
// export action creators
export const { addQuiz } = quizzessSlice.actions;
// export reducer
export default quizzessSlice.reducer;
