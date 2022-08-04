import React from "react";
import { Link } from "react-router-dom";
import RoadmapItem from "./RoadmapItem";

const roadmaps = [
  { title: "Planned", quantity: 2 },
  { title: "In-Progress", quantity: 3 },
  { title: "Live", quantity: 1 },
];

const Roadmap = () => {
  return (
    <div className="w-full min-h-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 py-4 px-8 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold tracking-wide">Roadmap</p>
        <p className="text-blue-500 underline text-sm font-semibold cursor-pointer tracking-wide">
          <Link to="/roadmap">View all</Link>
        </p>
      </div>
      <div>
        {roadmaps.map((roadmap) => (
          <RoadmapItem
            key={roadmap.title}
            quantity={roadmap.quantity}
            title={roadmap.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
