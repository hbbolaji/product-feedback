import React from "react";
import { useNavigate } from "react-router-dom";
import { FeedbackTypes } from "../store/types";
import { BsChevronUp, BsFillChatFill } from "react-icons/bs";
import Tag from "./Tag";
import { useDispatch } from "react-redux";
import { upvoteFeedback } from "../store/actions";

type PropTypes = {
  feedback: FeedbackTypes | any;
};

const FeedbackCard: React.FC<PropTypes> = ({ feedback }) => {
  const { title, upVotes, description, tag, numberOfComments } = feedback;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vote = () => {
    dispatch(upvoteFeedback({ ...feedback, upVotes: feedback.upVotes + 1 }));
  };
  return (
    <div className="flex space-x-6 w-full min-h-32 rounded-lg p-8 bg-white dark:bg-gray-800 dark:shadow-lg dark:text-white hover:shadow">
      <div
        className="hidden sm:flex bg-gray-100 dark:bg-gray-700 h-1/2 rounded-xl px-2 py-2 flex-col items-center justify-center space-y-1 cursor-pointer"
        onClick={vote}
      >
        <BsChevronUp className="text-blue-500" />
        <p className="font-semibold text-gray-600 dark:text-white">{upVotes}</p>
      </div>
      <div className="flex-1 space-y-3 cursor-pointer">
        <h4
          className="font-semibold tracking-wide text-slate-700 dark:text-slate-100"
          onClick={() => navigate(`/feedback/${feedback.id}`)}
        >
          {title}
        </h4>
        <p className="text-sm text-gray-500 mb-3 dark:text-slate-400">
          {description}
        </p>
        <Tag title={tag} />
        <div className="flex sm:hidden justify-between">
          <div
            className="bg-gray-100 dark:bg-gray-700 h-1/2 rounded-xl px-2 py-2 flex flex-col items-center justify-center space-y-1 cursor-pointer"
            onClick={vote}
          >
            <BsChevronUp className="text-blue-500" />
            <p className="font-semibold text-gray-600 dark:text-white">
              {upVotes}
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <BsFillChatFill className="text-gray-300 dark:text-gray-700" />
            <p className="text-slate-600 dark:text-slate-300 font-semibold">
              {numberOfComments}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-row items-center space-x-2">
        <BsFillChatFill className="text-gray-300 dark:text-gray-700" />
        <p className="text-slate-600 dark:text-slate-300 font-semibold">
          {numberOfComments}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
