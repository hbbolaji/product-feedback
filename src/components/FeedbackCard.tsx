import React from "react";
import { useNavigate } from "react-router-dom";

const FeedbackCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-32 rounded-lg p-4 bg-white dark:bg-gray-800 dark:shadow-lg dark:text-white hover:shadow cursor-pointer"
      onClick={() => navigate("/feedback/1")}
    >
      <p>Feedback</p>
    </div>
  );
};

export default FeedbackCard;
