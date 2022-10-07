import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sortFeedback } from "../store/actions";
import { FeedbackTypes, StoreType } from "../store/types";

interface Props {
  changeSortTitle: (sort: string) => void;
}

const Submenu: React.FC<Props> = ({ changeSortTitle }) => {
  const dispatch = useDispatch();
  const feedbackObj = Object.values(
    useSelector((state: StoreType) => state.feedbacks)
  );
  const handleSort = (comment: string) => {
    changeSortTitle(comment);
    let feedbacks;
    if (comment === "Most Upvotes") {
      feedbacks = feedbackObj.sort((a, b) => b?.upVotes - a?.upVotes);
    } else if (comment === "Least Upvotes") {
      feedbacks = feedbackObj.sort((a, b) => a?.upVotes - b?.upVotes);
    } else if (comment === "Most Comments") {
      feedbacks = feedbackObj.sort(
        (a, b) => b?.numberOfComments - a?.numberOfComments
      );
    } else if (comment === "Least Comments") {
      feedbacks = feedbackObj.sort(
        (a, b) => a?.numberOfComments - b?.numberOfComments
      );
    }
    dispatch(sortFeedback(feedbacks as FeedbackTypes[]));
  };
  return (
    <div className="absolute right-0 top-12 bg-white text-gray-700 dark:bg-gray-800 dark:text-white shadow-lg text-center text-sm space-y-1 font-semibold">
      <p
        className="p-4 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700"
        onClick={() => handleSort("Most Upvotes")}
      >
        Most Upvotes
      </p>
      <p
        className="p-4 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700"
        onClick={() => handleSort("Least Upvotes")}
      >
        Least Upvotes
      </p>
      <p
        className="p-4 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700"
        onClick={() => handleSort("Most Comments")}
      >
        Most Comments
      </p>
      <p
        className="p-4 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700"
        onClick={() => handleSort("Least Comments")}
      >
        Least Comments
      </p>
    </div>
  );
};

export default Submenu;
