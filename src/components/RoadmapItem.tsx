import React from "react";
import { BsDot } from "react-icons/bs";

interface PropsType {
  title: string;
  quantity: number;
}

const RoadmapItem: React.FC<PropsType> = ({ title, quantity }) => {
  return (
    <div className="flex items-center justify-between">
      {title === "Planned" && (
        <BsDot className="-ml-3 text-orange-500 text-4xl" />
      )}
      {title === "In-Progress" && (
        <BsDot className="-ml-3 text-purple-500 text-4xl" />
      )}
      {title === "Live" && <BsDot className="-ml-3 text-blue-500 text-4xl" />}
      <span className="text-gray-500 dark:text-gray-300 text-lg">{title}</span>
      <span className="flex-1 justify-end flex text-lg dark:text-gray-200 text-gray-500 font-bold">
        <span>{quantity}</span>
      </span>
    </div>
  );
};

export default RoadmapItem;
