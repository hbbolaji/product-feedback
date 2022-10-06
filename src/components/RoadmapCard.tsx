import React from "react";
import { BsChevronUp, BsDot, BsFillChatFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { upvoteFeedback } from "../store/actions";
import { FeedbackTypes } from "../store/types";
import Tag from "./Tag";

interface Props {
  title: string;
  feedback: FeedbackTypes;
}

const RoadmapCard: React.FC<Props> = ({ title, feedback }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vote = () => {
    dispatch(upvoteFeedback({ ...feedback, upVotes: feedback.upVotes + 1 }));
  };
  let color;
  let borderColor;
  if (title === "Planned") borderColor = "border-t-orange-500";
  else if (title === "In-Progress") borderColor = "border-t-purple-500";
  else if (title === "Live") borderColor = "border-t-blue-500";
  if (title === "Planned") color = "orange";
  else if (title === "In-Progress") color = "purple";
  else if (title === "Live") color = "blue";

  return (
    <div
      className={`border-t space-y-5 border-t-4 ${borderColor} dark:text-gray-200 rounded-b-lg p-4 bg-white dark:bg-gray-800 dark:shadow-lg dark:text-white hover:shadow cursor-pointer`}
    >
      <div className="flex items-center">
        <BsDot className={`-ml-3 text-${color}-500 text-4xl`} />
        <span className="text-gray-500 dark:text-gray-300">{title}</span>
      </div>
      <p
        className="text-gray-500 dark:text-gray-300 font-semibold cursor-pointer"
        onClick={() => navigate(`/feedback/${feedback.id}`)}
      >
        {feedback.title}
      </p>
      <div>
        <Tag title={feedback.tag} handleSelect={() => {}} active={false} />
      </div>
      <div className="flex items-center justify-between">
        <div
          className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded-lg cursor-pointer"
          onClick={vote}
        >
          <BsChevronUp className="text-gray-500" />
          <p className="font-semibold text-gray-600 dark:text-white">
            {feedback.upVotes}
          </p>
        </div>
        <div className="inline-flex items-center space-x-2">
          <BsFillChatFill className="text-gray-500" />
          <p className="font-semibold text-gray-600 dark:text-white">
            {feedback.numberOfComments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
