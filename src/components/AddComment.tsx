import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReply } from "../store/actions";
import { CommentType, ReplyType } from "../store/types";

interface Props {
  close: () => void;
  replyComment: boolean;
  data?: CommentType | ReplyType;
}

const AddComment: React.FC<Props> = ({ data, replyComment, close }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const submitComment = () => {
    if (replyComment) {
      // dispatch(addComment(data))
      console.log("Reply: ", comment);
    } else {
      // dispatch(addReply(data))
      console.log("Comment: ", comment);
    }
    close();
  };
  return (
    <div className="p-4 space-y-6">
      <p className="text-xl dark:text-white font-semibold text-gray-500">
        {replyComment ? "Add Reply" : "Add Comment"}
      </p>
      <div>
        <textarea
          rows={replyComment ? 2 : 4}
          className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg outline-none focus:ouline-none p-4 text-gray-700 dark:text-gray-100"
          value={comment}
          maxLength={250}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <div className="flex items-center justify-between">
          <p className="text-gray-700 dark:text-gray-100">
            {250 - comment.length} left
          </p>
          <button
            className="py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold"
            onClick={submitComment}
          >
            {replyComment ? "Add Reply" : "Add Comment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
