import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterTag } from "../store/actions";
import { StoreType } from "../store/types";

const Tag: React.FC<{
  title: string;
  select?: boolean;
  active?: boolean;
  handleSelect: (title: string) => void;
}> = ({ title, select, handleSelect, active }) => {
  const dispatch = useDispatch();
  const feedbackObj = Object.values(
    useSelector((state: StoreType) => state.feedbacks)
  );
  const feedbacks = feedbackObj.sort((a, b) => b?.upVotes - a?.upVotes);
  const handleTag = (title: string) => {
    if (active) {
      handleSelect(title);
      dispatch(
        filterTag(
          title,
          feedbacks.filter((feed) => feed.tag === title)
        )
      );
    }
  };
  return (
    <div
      onClick={() => handleTag(title)}
      className={`px-5 rounded-lg select-none ${
        select ? "bg-blue-600" : "bg-gray-100"
      } ${
        select ? "dark:bg-blue-600" : "dark:bg-gray-700"
      }  h-8 cursor-pointer inline-flex items-center`}
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
