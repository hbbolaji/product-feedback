import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Modal from "../components/Modal";
import { FeedbackTypes, StoreType } from "../store/types";

const Feedback = () => {
  const [show, setShow] = useState<boolean>(false);
  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const feedbacks = useSelector((state: StoreType) => state.feedbacks);
  const feedback = feedbacks.find((feed) => feed.id === id) as FeedbackTypes;
  return (
    <>
      <div className="2xl:mx-96 xl:mx-56 lg:mx-32 mx-4 md:mx-12 py-24 space-y-4">
        {/* Feedback heading */}
        <div className="w-full flex space-between items-center">
          <p
            className="text-gray-700 dark:text-white flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {" "}
            <AiOutlineLeft className="text-xl" />
            <span>go back</span>
          </p>
          <div className="">
            <button
              className="py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold"
              onClick={open}
            >
              Edit Feedback
            </button>
          </div>
        </div>

        {/* Feedback content */}
        <FeedbackCard feedback={feedback} />

        {/* Feedback comments */}
        <div className="bg-white h-96 w-full rounded-lg p-4 dark:bg-gray-800 text-white">
          Comments
        </div>

        {/* Feedback comment addition */}
        <div className="bg-white h-56 w-full rounded-lg p-4 dark:bg-gray-800 text-white">
          Add comments
        </div>
      </div>
      {/* Edit Feedback Modal */}
      <Modal show={show} close={close}>
        <FeedbackForm close={close} edit={true} feedback={feedback} />
      </Modal>
    </>
  );
};

export default Feedback;
