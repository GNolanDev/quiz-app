import { createSlice } from "@reduxjs/toolkit";

// set up topics slice with action for adding a new topic
const options = {
  name: "topics",
  initialState: {},
  reducers: {
    addTopic: (state, action) => {
      state[action.payload.id] = { ...action.payload, quizIds: [] };
    }
  }
};

const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
