import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import FeedbackCard from "../components/FeedbackCard";
import { StoreType } from "../store/types";

const Feedback = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const feedbacks = useSelector((state: StoreType) => state.feedbacks);
  const feedback = feedbacks.find((feed) => feed.id === id);
  return (
    <div className="2xl:mx-96 xl:mx-56 lg:mx-32 mx-4 md:mx-12 py-24 space-y-4">
      <div>
        <p
          className="text-gray-700 dark:text-white flex items-center space-x-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {" "}
          <AiOutlineLeft className="text-xl" />
          <span>go back</span>
        </p>
      </div>
      <FeedbackCard feedback={feedback} />
      <div className="bg-white h-96 w-full rounded-lg p-4 dark:bg-gray-800 text-white">
        Comments
      </div>
      <div className="bg-white h-56 w-full rounded-lg p-4 dark:bg-gray-800 text-white">
        Add comments
      </div>
    </div>
  );
};

export default Feedback;
