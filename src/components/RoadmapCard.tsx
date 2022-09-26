import React from "react";
import { BsChevronUp, BsDot, BsFillChatFill } from "react-icons/bs";
import Tag from "./Tag";

interface Props {
  title: string;
}

const RoadmapCard: React.FC<Props> = ({ title }) => {
  let borderColor;
  if (title === "Planned") borderColor = "orange";
  else if (title === "In-Progress") borderColor = "purple";
  else if (title === "Live") borderColor = "blue";
  return (
    <div
      className={`border-t space-y-5 border-t-4 border-t-${borderColor}-500 dark:text-gray-200 rounded-b-lg p-4 bg-white dark:bg-gray-800 dark:shadow-lg dark:text-white hover:shadow cursor-pointer`}
    >
      <div className="flex items-center">
        <BsDot className={`-ml-3 text-${borderColor}-500 text-4xl`} />
        <span className="text-gray-500 dark:text-gray-300">{title}</span>
      </div>
      <p className="text-gray-500 dark:text-gray-300 font-semibold">
        This a Roadmap to display the status of a feedback
      </p>
      <div>
        <Tag title={`Enhancement`} />
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded-lg">
          <BsChevronUp className="text-gray-500" />
          <p className="font-semibold text-gray-600 dark:text-white">{12}</p>
        </div>
        <div className="inline-flex items-center space-x-2">
          <BsFillChatFill className="text-gray-500" />
          <p className="font-semibold text-gray-600 dark:text-white">{12}</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
