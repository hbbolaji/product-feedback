import React, { useState } from "react";
import { ReplyType } from "../store/types";
import AddComment from "./AddComment";

interface Props {
  feedbackId: string;
  commentId: string;
  to: string;
  reply: ReplyType;
}

const Reply: React.FC<Props> = ({ feedbackId, to, commentId, reply }) => {
  const [show, setShow] = useState<boolean>(false);
  const close = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-900 text-2xl font-semibold">R</p>
          </div>
          <div>
            <p className="font-semibold dark:text-white">{reply.fullName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {reply.userName}
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
      <div className="pl-8 sm:pl-16">
        <p className="text-gray-500 dark:text-gray-200 text-lg leading-relaxed">
          <span className="text-indigo-500">{reply.to}</span> {reply.content}
        </p>
      </div>
      {show && (
        <AddComment
          feedbackId={feedbackId}
          commentId={commentId}
          reply={reply}
          to={to}
          replyComment={true}
          close={close}
        />
      )}
    </div>
  );
};

export default Reply;
