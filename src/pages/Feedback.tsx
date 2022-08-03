import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import FeedbackCard from "../components/FeedbackCard";

const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div className="2xl:mx-96 xl:mx-56 lg:mx-32 md:mx-12 py-24 space-y-4">
      <div>
        <p
          className="text-gray-700 flex items-center space-x-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {" "}
          <AiOutlineLeft />
          <span>go back</span>
        </p>
      </div>
      <FeedbackCard />
      <div className="bg-white h-96 w-full rounded-lg p-4">Comments</div>
      <div className="bg-white h-56 w-full rounded-lg p-4">Add comments</div>
    </div>
  );
};

export default Feedback;
