import {
  ActionTypes,
  ADD_COMMENT,
  ADD_FEEDBACK,
  ADD_REPLY,
  EDIT_FEEDBACK,
  UPVOTE_FEEDBACK,
} from "./actions";
import { CommentsType, StoreType } from "./types";

const comments: CommentsType = {
  "comment 1": {
    id: "comment 1",
    fullName: "Gareth James",
    userName: "@gjames",
    content: "Also please allow style to be applied based on system preference",
    reply: [
      {
        id: "reply 1",
        to: "@gjames",
        fullName: "drake boy",
        userName: "@dboy",
        content:
          "while waiting for this, you can use browser extension for dark mode",
      },
      {
        id: "reply 2",
        to: "@dboy",
        fullName: "Missy Sheldon",
        userName: "@msheldon",
        content:
          "Also please allow style to be applied based on system preference",
      },
    ],
  },
  "comment 2": {
    id: "comment 2",
    fullName: "Jane Smith",
    userName: "@smithj",
    content: "I second this! I do alot of late night coding and reading",
  },
};

const defaultState: StoreType = {
  feedbacks: {
    "number 1": {
      id: "number 1",
      description: "Easier to search for solution based on specific stacks",
      numberOfComments: 2,
      tag: "Enhancement",
      title: "Add tags for solutions",
      upVotes: 112,
      comments: comments,
    },
    "number 2": {
      id: "number 2",
      description:
        "It will help people with light sensitivities and people who like dark mode",
      numberOfComments: 4,
      tag: "Feature",
      title: "Add dark theme option",
      upVotes: 99,
      comments: comments,
    },
    "number 3": {
      id: "number 3",
      description: "Challenge-specific Q & A will make for easy reference",
      numberOfComments: 1,
      tag: "Feature",
      title: "Q & A within the challenge hubs",
      upVotes: 65,
      comments,
    },
    "number 4": {
      id: "number 4",
      description: "Images and screencast can enhance comments on solutions",
      numberOfComments: 2,
      tag: "Enhancement",
      title: "Allow Image/Video upload to Feedback",
      upVotes: 51,
      comments,
    },
    "number 5": {
      id: "number 5",
      description: "Stay updated on comments and solutions other people post",
      numberOfComments: 3,
      tag: "Feature",
      title: "Ability to follow others",
      upVotes: 42,
      comments,
    },
    "number 6": {
      id: "number 6",
      description: "Challenge Preview image are missing when filter is applied",
      numberOfComments: 0,
      tag: "Bug",
      title: "Preview Image not loading",
      upVotes: 3,
    },
  },
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
      const commentLength = Object.keys(comments).length;
      return {
        ...state,
        feedbacks: {
          ...state.feedbacks,
          [action.payload.feedbackId as string]: {
            ...state.feedbacks[action.payload.feedbackId],
            comments: {
              ...comments,
              [`comment ${Number(commentLength) + 1}`]: {
                id: "comment " + (Number(commentLength) + 1),
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
      const replyLength = replies.length;
      const newReply = [
        ...replies,
        { id: "reply " + (replyLength + 1), ...action.payload.reply },
      ];
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
    default:
      return state;
  }
};

export default Reducer;
