export interface CommentType {
  id: string;
  userName: string;
  fullName: string;
  content: string;
  reply?: ReplyType[];
}

export interface ReplyType extends CommentType {
  to: string;
}

export interface FeedbackTypes {
  id?: string;
  title: string;
  description: string;
  tag: string;
  numberOfComments: number;
  upVotes: number;
  comments?: CommentType[];
}

export interface StoreType {
  feedbacks: {
    [key: string]: FeedbackTypes;
  };
}
