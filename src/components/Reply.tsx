import React from "react";
import { ReplyType } from "../store/types";

interface Props {
  reply: ReplyType;
}

const Reply: React.FC<Props> = ({ reply }) => {
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
        <p className="text-indigo-500  font-semibold cursor-pointer">Reply</p>
      </div>
      <div className="pl-8 sm:pl-16">
        <p className="text-gray-500 dark:text-gray-200 text-lg leading-relaxed">
          <span className="text-indigo-500">{reply.to}</span> {reply.content}
        </p>
      </div>
    </div>
  );
};

export default Reply;
