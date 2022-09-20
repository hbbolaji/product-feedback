import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";

import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Modal from "../components/Modal";
import { StoreType } from "../store/types";

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
  const feedbackObj = Object.values(
    useSelector((state: StoreType) => state.feedbacks)
  );
  const feedbacks = feedbackObj.sort((a, b) => b?.upVotes - a?.upVotes);
  const feedback = feedbacks.find((feed) => feed.id === id);
  const length = feedback?.comments?.length || 0;
  return (
    <>
      <div className="2xl:mx-96 xl:mx-56 lg:mx-32 mx-4 md:mx-12 py-24 space-y-4">
        {/* Feedback heading */}
        <div className="flex justify-between items-center">
          <div
            className="text-gray-700 dark:text-white flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {" "}
            <AiOutlineLeft className="text-xl" />
            <p>go back</p>
          </div>
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
        <div className="bg-white min:h-48 w-full rounded-lg p-8 dark:bg-gray-800 dark:text-white">
          {length ? (
            <div className="space-y-4">
              <p className="text-xl dark:text-white font-semibold text-gray-500">
                {length > 1 ? `${length} Comments` : `1 Comment`}
              </p>
              <div className="space-y-6">
                {feedback?.comments?.map((comment) => (
                  <Comment
                    comment={comment}
                    feedbackId={feedback.id as string}
                    key={comment.id}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-xl dark:text-white font-semibold text-gray-500">
              No Comments
            </p>
          )}
        </div>

        {/* Feedback comment addition */}
        <div className="bg-white min:h-56 w-full rounded-lg p-4 dark:bg-gray-800 text-white">
          <AddComment
            feedbackId={feedback?.id as string}
            replyComment={false}
            close={() => {}}
          />
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
