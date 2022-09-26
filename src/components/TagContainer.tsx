import React from "react";
import Tag from "./Tag";

const TagContainer = () => {
  return (
    <div className="w-full min-h-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 p-4 flex flex-wrap">
      <div className="p-1">
        <Tag title="All" />
      </div>
      <div className="p-1">
        <Tag title="UI" />
      </div>
      <div className="p-1">
        <Tag title="UX" />
      </div>
      <div className="p-1">
        <Tag title="Enhancement" />
      </div>
      <div className="p-1">
        <Tag title="Bug" />
      </div>
      <div className="p-1">
        <Tag title="Feature" />
      </div>
    </div>
  );
};

export default TagContainer;
