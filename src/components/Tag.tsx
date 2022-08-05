import React, { useState } from "react";

const Tag: React.FC<{ title: string }> = ({ title }) => {
  const [select, setSelect] = useState<boolean>(false);
  const toggleSelect = () => {
    setSelect((prevState) => !prevState);
  };
  return (
    <div
      onClick={toggleSelect}
      className={`px-5 rounded-lg ${select ? "bg-blue-600" : "bg-gray-100"} ${
        select ? "dark:bg-blue-600" : "dark:bg-gray-700"
      }  h-8 m-1 cursor-pointer inline-flex items-center`}
    >
      <p
        className={`text-sm font-semibold ${
          select ? "text-white" : "text-blue-600"
        } ${select ? "dark:text-white" : "dark:text-blue-200"}`}
      >
        {title}
      </p>
    </div>
  );
};

export default Tag;
