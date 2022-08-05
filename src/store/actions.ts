import { FeedbackTypes } from "./types";

export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const EDIT_FEEDBACK = "EDIT_FEEDBACK";

export type ActionTypes =
  | { type: typeof ADD_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof EDIT_FEEDBACK; payload: string };

export const addFeedback = (payload: FeedbackTypes): ActionTypes => ({
  type: ADD_FEEDBACK,
  payload,
});
export const editFeedback = (id: string): ActionTypes => ({
  type: EDIT_FEEDBACK,
  payload: id,
});
