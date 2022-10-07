import {
  ActionTypes,
  ADD_COMMENT,
  ADD_FEEDBACK,
  ADD_REPLY,
  EDIT_FEEDBACK,
  FILTER_TAG,
  SORT_FEEDBACK,
  UPVOTE_FEEDBACK,
} from "./actions";
import { CommentsType, FeedbackTypes, StoreType } from "./types";

const comments: CommentsType = {
  "55a9d0a7-b407-4c71-bcfb-d2cb811ca8ab": {
    id: "55a9d0a7-b407-4c71-bcfb-d2cb811ca8ab",
    fullName: "Gareth James",
    userName: "@gjames",
    content: "Also please allow style to be applied based on system preference",
    reply: [
      {
        id: "71bde173-3dc9-4665-a0a6-08ef622bd18a",
        to: "@gjames",
        fullName: "drake boy",
        userName: "@dboy",
        content:
          "while waiting for this, you can use browser extension for dark mode",
      },
      {
        id: "231d7131-925f-41c7-a5b6-d805a1344f8b",
        to: "@dboy",
        fullName: "Missy Sheldon",
        userName: "@msheldon",
        content:
          "Also please allow style to be applied based on system preference",
      },
    ],
  },
  "a0509949-593c-4e3c-b3b0-46e4b5253fd1": {
    id: "a0509949-593c-4e3c-b3b0-46e4b5253fd1",
    fullName: "Jane Smith",
    userName: "@smithj",
    content: "I second this! I do alot of late night coding and reading",
  },
};

const feeds: {
  [key: string]: FeedbackTypes;
} = {
  "0ed93612-18f1-43a0-96e6-181191c07b37": {
    id: "0ed93612-18f1-43a0-96e6-181191c07b37",
    description: "Easier to search for solution based on specific stacks",
    numberOfComments: 2,
    tag: "Enhancement",
    title: "Add tags for solutions",
    upVotes: 112,
    status: "Planned",
    comments: comments,
  },
  "04024ada-5a27-4d10-9387-864d0f491a40": {
    id: "04024ada-5a27-4d10-9387-864d0f491a40",
    description:
      "It will help people with light sensitivities and people who like dark mode",
    numberOfComments: 4,
    tag: "Feature",
    title: "Add dark theme option",
    status: "In-Progress",
    upVotes: 99,
    comments: comments,
  },
  "154db9c8-ea8c-4789-b160-8c87178c35df": {
    id: "154db9c8-ea8c-4789-b160-8c87178c35df",
    description: "Challenge-specific Q & A will make for easy reference",
    numberOfComments: 1,
    tag: "Feature",
    title: "Q & A within the challenge hubs",
    status: "Live",
    upVotes: 65,
    comments,
  },
  "90023ea0-1900-4222-a600-d2d1cabd6b06": {
    id: "90023ea0-1900-4222-a600-d2d1cabd6b06",
    description: "Images and screencast can enhance comments on solutions",
    numberOfComments: 2,
    tag: "Enhancement",
    title: "Allow Image/Video upload to Feedback",
    status: "Planned",
    upVotes: 51,
    comments,
  },
  "2bc64bd9-5ce6-4c3f-a83d-61694569a122": {
    id: "2bc64bd9-5ce6-4c3f-a83d-61694569a122",
    description: "Stay updated on comments and solutions other people post",
    numberOfComments: 3,
    tag: "Feature",
    title: "Ability to follow others",
    status: "In-Progress",
    upVotes: 42,
    comments,
  },
  "cae2659b-049c-4fcc-8a9e-edbe522ba7b9": {
    id: "cae2659b-049c-4fcc-8a9e-edbe522ba7b9",
    description: "Challenge Preview image are missing when filter is applied",
    numberOfComments: 0,
    tag: "Bug",
    title: "Preview Image not loading",
    status: "Live",
    upVotes: 3,
  },
};

const defaultState: StoreType = {
  feedbacks: { ...feeds },
};

const Reducer = (state: StoreType = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.id as string]: action.payload,
        },
      };
    case EDIT_FEEDBACK:
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.id as string]: action.payload,
        },
      };
    case UPVOTE_FEEDBACK:
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.id as string]: action.payload,
        },
      };
    case ADD_COMMENT:
      const comments =
        state.feedbacks[action.payload.feedbackId].comments || {};
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.feedbackId as string]: {
            ...state.feedbacks[action.payload.feedbackId],
            comments: {
              ...comments,
              [action.payload.comment.id as string]: {
                ...action.payload.comment,
              },
            },
          },
        },
      };
    case ADD_REPLY:
      const stateComment =
        state.feedbacks[action.payload.feedbackId].comments || {};
      const replies = stateComment[action.payload.commentId]?.reply || [];
      const newReply = [...replies, { ...action.payload.reply }];
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.feedbackId as string]: {
            ...state.feedbacks[action.payload.feedbackId],
            comments: {
              ...stateComment,
              [action.payload.commentId]: {
                ...stateComment[action.payload.commentId],
                reply: newReply,
              },
            },
          },
        },
      };
    case FILTER_TAG:
      const feedbacks = Object.values(feeds).filter(
        (feed) => feed.tag === action.payload.tag
      );

      const finalObj = feedbacks.reduce(
        (obj, item) => Object.assign(obj, { [item.id as string]: item }),
        {}
      );
      return {
        ...state,
        feedbacks: action.payload.tag === "All" ? feeds : finalObj,
      };
    case SORT_FEEDBACK:
      const sortedFeedbackObj = action.payload.feedbacks.reduce(
        (obj, item) => Object.assign(obj, { [item.id as string]: item }),
        {}
      );
      return { ...state, feedbacks: sortedFeedbackObj };
    default:
      return state;
  }
};

export default Reducer;
