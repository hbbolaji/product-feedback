import React, { useState } from "react";
import Tag from "./Tag";

const TagContainer = () => {
  const tagData = [
    { title: "All" },
    { title: "UI" },
    { title: "UX" },
    { title: "Enhancement" },
    { title: "Bug" },
    { title: "Feature" },
  ];
  const [selectedTag, setSelectedTag] = useState<string>("");
  const handleSelect = (title: string) => {
    setSelectedTag(title);
  };
  return (
    <div className="w-full min-h-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 p-4 flex flex-wrap">
      {tagData.map((t) => (
        <div key={t.title} className="p-1">
          <Tag
            title={t.title}
            handleSelect={handleSelect}
            active={true}
            select={selectedTag === t.title}
          />
        </div>
      ))}
    </div>
  );
};

export default TagContainer;
