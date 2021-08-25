# Quiz App

## Aim

A project set by Codecademy as part of the full stack path. Uses Create-React-App as a base, html templates and React Router basic framework given. My job was to create the slices and get all the components talking to each other via actions/reducers/selectors etc.

This was a good overview of how React single page apps make use of <BrowserRouter> and Slices to organise the Redux Store, another chance to consider Separation of Concerns, and another opportunity to use build tools.

## Technologies

- ECMAScript 6
- React
- Redux

## Requirements

Hosted on [netlify](https://gnolandevquiz-app.netlify.app/).

## Contact

Created by GNolanDev@gmail.com - comments gratefully received!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# State & Improvements

The original readme for the project mentions normalisation - I believe there is a little more to be done here. The given structure has "topic" objects holding a list of associated quizzes, but also has each "quiz" holding the id of an associated topic. This seems like duplication of data sources that could potentially contradict each other. An improvement would be to only hold the data regarding which quizzes are associated with which topics in a join table, and look this up whenever necessary.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over
