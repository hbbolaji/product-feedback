export interface CommentType {
  id?: string;
  userName: string;
  fullName: string;
  content: string;
  reply?: ReplyType[];
}

export interface ReplyType extends CommentType {
  to: string;
}

export interface CommentsType {
  [key: string]: CommentType;
}

export interface FeedbackTypes {
  id?: string;
  title: string;
  status: "Planned" | "In-Progress" | "Live";
  description: string;
  tag: string;
  numberOfComments: number;
  upVotes: number;
  comments?: CommentsType;
}

export interface StoreType {
  feedbacks: {
    [key: string]: FeedbackTypes;
  };
}
