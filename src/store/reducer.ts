import { ActionTypes, ADD_FEEDBACK, EDIT_FEEDBACK } from "./actions";
import { CommentType, StoreType } from "./types";

const comments: CommentType[] = [
  {
    id: "1",
    fullName: "Gareth James",
    userName: "@gjames",
    content: "Also please allow style to be applied based on system preference",
    reply: [
      {
        id: "i",
        to: "@gjames",
        fullName: "drake boy",
        userName: "@dboy",
        content:
          "while waiting for this, you can use browser extension for dark mode",
      },
      {
        id: "ii",
        to: "@dboy",
        fullName: "Missy Sheldon",
        userName: "@msheldon",
        content:
          "Also please allow style to be applied based on system preference",
      },
    ],
  },
  {
    id: "2",
    fullName: "Jane Smith",
    userName: "@smithj",
    content: "I second this! I do alot of late night coding and reading",
  },
];

const defaultState: StoreType = {
  feedbacks: [
    {
      id: "number 1",
      description: "Easier to search for solution based on specific stacks",
      numberOfComments: 2,
      tag: "Enhancement",
      title: "Add tags for solutions",
      upVotes: 112,
      comments: comments,
    },
    {
      id: "number 2",
      description:
        "It will help people with light sensitivities and people who like dark mode",
      numberOfComments: 4,
      tag: "Feature",
      title: "Add dark theme option",
      upVotes: 99,
      comments: comments,
    },
    {
      id: "number 3",
      description: "Challenge-specific Q & A will make for easy reference",
      numberOfComments: 1,
      tag: "Feature",
      title: "Q & A within the challenge hubs",
      upVotes: 65,
      comments,
    },
    {
      id: "number 4",
      description: "Images and screencast can enhance comments on solutions",
      numberOfComments: 2,
      tag: "Enhancement",
      title: "Allow Image/Video upload to Feedback",
      upVotes: 51,
      comments,
    },
    {
      id: "number 5",
      description: "Stay updated on comments and solutions other people post",
      numberOfComments: 3,
      tag: "Feature",
      title: "Ability to follow others",
      upVotes: 42,
      comments,
    },
    {
      id: "number 6",
      description: "Challenge Preview image are missing when filter is applied",
      numberOfComments: 0,
      tag: "Bug",
      title: "Preview Image not loading",
      upVotes: 3,
    },
  ],
};

const Reducer = (state: StoreType = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
      };
    case EDIT_FEEDBACK:
      const newFeedback = { ...state }.feedbacks.filter(
        (feed) => feed.id !== action.payload.id
      );
      return { feedbacks: [...newFeedback, action.payload] };
    default:
      return state;
  }
};

export default Reducer;
