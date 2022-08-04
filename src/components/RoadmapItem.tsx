import React from "react";
import { BsDot } from "react-icons/bs";

interface PropsType {
  title: string;
  quantity: number;
}

const RoadmapItem: React.FC<PropsType> = ({ title, quantity }) => {
  return (
    <li className="flex items-center">
      {title === "Planned" && <BsDot className="text-orange-500 text-4xl" />}
      {title === "In-Progress" && (
        <BsDot className="text-purple-500 text-4xl" />
      )}
      {title === "Live" && <BsDot className="text-blue-500 text-4xl" />}
      <span className="text-gray-500 dark:text-gray-300 text-lg">{title}</span>
      <span className="flex-1 justify-end flex text-lg dark:text-gray-200 text-gray-300 font-bold">
        <span>{quantity}</span>
      </span>
    </li>
  );
};

export default RoadmapItem;
