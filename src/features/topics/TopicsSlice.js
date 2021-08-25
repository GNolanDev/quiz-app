import { createSlice } from "@reduxjs/toolkit";

// set up topics slice with action for adding a new topic
const options = {
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    }
  }
};

const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
