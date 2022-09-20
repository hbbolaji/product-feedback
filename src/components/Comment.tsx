import React, { useState } from "react";
import { CommentType } from "../store/types";
import AddComment from "./AddComment";
import Reply from "./Reply";

interface Props {
  feedbackId: string;
  comment: CommentType;
}

const Comments: React.FC<Props> = ({ feedbackId, comment }) => {
  const [show, setShow] = useState<boolean>(false);
  const close = () => {
    setShow(false);
  };
  return (
    <div className="space-y-4 py-8 border-b border-gray-400 dark:boder-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-900 text-2xl font-semibold">C</p>
          </div>

          <div>
            <p className="font-semibold dark:text-white">{comment.fullName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {comment.userName}
            </p>
          </div>
        </div>
        <p
          className="text-indigo-500  font-semibold cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? "Cancel" : "Reply"}
        </p>
      </div>
      {show && (
        <AddComment
          to={comment.userName}
          feedbackId={feedbackId}
          commentId={comment.id}
          replyComment={true}
          close={close}
        />
      )}
      <div className="pl-4 sm:pl-16">
        <p className="text-gray-500 dark:text-gray-200 text-lg leading-relaxed">
          {comment.content}
        </p>
      </div>
      <div className="pl-4 sm:pl-16 space-y-4">
        {comment.reply?.map((rep) => (
          <Reply
            reply={rep}
            commentId={comment.id as string}
            feedbackId={feedbackId}
            to={comment.userName}
            key={rep.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
