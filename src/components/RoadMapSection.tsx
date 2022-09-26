import React from "react";
import RoadmapCard from "./RoadmapCard";

interface Props {
  title: "Planned" | "In-Progress" | "Live";
  description: string;
  feedbacks: any[];
}

const RoadMapSection: React.FC<Props> = ({ title, description, feedbacks }) => {
  return (
    <div className="space-y-4">
      <div className="dark:text-gray-200 p-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="space-y-4">
        {feedbacks.map((roadmap) => (
          <div key={roadmap}>
            <RoadmapCard title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMapSection;
