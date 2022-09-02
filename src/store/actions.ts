import { FeedbackTypes } from "./types";

export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const EDIT_FEEDBACK = "EDIT_FEEDBACK";
export const UPVOTE_FEEDBACK = "UPVOTE_FEEDBACK";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY = "ADD_REPLY";

export type ActionTypes =
  | { type: typeof ADD_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof EDIT_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof UPVOTE_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof ADD_COMMENT; payload: FeedbackTypes }
  | { type: typeof ADD_REPLY; payload: FeedbackTypes };

export const addFeedback = (payload: FeedbackTypes): ActionTypes => ({
  type: ADD_FEEDBACK,
  payload,
});
export const editFeedback = (feedback: FeedbackTypes): ActionTypes => ({
  type: EDIT_FEEDBACK,
  payload: feedback,
});
export const upvoteFeedback = (feedback: FeedbackTypes) => ({
  type: UPVOTE_FEEDBACK,
  payload: feedback,
});
export const addComment = (feedback: FeedbackTypes) => ({
  type: ADD_COMMENT,
  payload: feedback,
});
export const addReply = (feedback: FeedbackTypes) => ({
  type: ADD_REPLY,
  payload: feedback,
});
