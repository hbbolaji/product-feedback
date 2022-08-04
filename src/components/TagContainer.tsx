import React from "react";
import Tag from "./Tag";

const TagContainer = () => {
  return (
    <div className="w-full min-h-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 p-4 flex flex-wrap">
      <Tag title="All" />
      <Tag title="UI" />
      <Tag title="UX" />
      <Tag title="Enhancement" />
      <Tag title="Bug" />
      <Tag title="Feature" />
    </div>
  );
};

export default TagContainer;
