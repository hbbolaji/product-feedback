import { CommentType, FeedbackTypes, ReplyType } from "./types";

export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const EDIT_FEEDBACK = "EDIT_FEEDBACK";
export const UPVOTE_FEEDBACK = "UPVOTE_FEEDBACK";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const FILTER_TAG = "FILTER_TAG";
export const SORT_FEEDBACK = "SORT_FEEDBACK";

export type ActionTypes =
  | { type: typeof ADD_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof EDIT_FEEDBACK; payload: FeedbackTypes }
  | { type: typeof UPVOTE_FEEDBACK; payload: FeedbackTypes }
  | {
      type: typeof ADD_COMMENT;
      payload: { feedbackId: string; comment: CommentType };
    }
  | {
      type: typeof ADD_REPLY;
      payload: { feedbackId: string; commentId: string; reply: ReplyType };
    }
  | {
      type: typeof FILTER_TAG;
      payload: {
        tag: string;
        feedbacks: FeedbackTypes[];
      };
    }
  | {
      type: typeof SORT_FEEDBACK;
      payload: { feedbacks: FeedbackTypes[] };
    };

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
export const addComment = (feedbackId: string, comment: CommentType) => ({
  type: ADD_COMMENT,
  payload: { comment, feedbackId },
});
export const addReply = (
  feedbackId: string,
  commentId: string,
  reply: ReplyType
) => ({
  type: ADD_REPLY,
  payload: { feedbackId, commentId, reply },
});
export const filterTag = (tag: string, feedbacks: FeedbackTypes[]) => ({
  type: FILTER_TAG,
  payload: { tag, feedbacks },
});
export const sortFeedback = (feedbacks: FeedbackTypes[]) => ({
  type: SORT_FEEDBACK,
  payload: { feedbacks },
});
