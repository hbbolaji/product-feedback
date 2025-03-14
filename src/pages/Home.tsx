import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppHeader from "../components/AppHeader";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import RoadmapHeader from "../components/RoadmapHeader";
import TagContainer from "../components/TagContainer";
import { StoreType } from "../store/types";

const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const feedbacks = Object.values(
    useSelector((state: StoreType) => state.feedbacks)
  );
  // const feedbacks = feedbackObj.sort((a, b) => b?.upVotes - a?.upVotes);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const toggle = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="relative">
      <div className="2xl:mx-96 xl:mx-48 lg:mx-24 md:mx-6">
        <div className="flex flex-col lg:flex-row p-0 md:py-24 space-x-0 lg:space-x-4 md:space-y-6 lg:space-y-0">
          <div className="w-full flex md:flex-row flex-col space-y-4 md:space-y-0 lg:flex-col md:space-x-4 lg:space-x-0 lg:w-1/4 lg:space-y-4">
            <div className="md:w-5/12 lg:w-full">
              <AppHeader show={show} toggle={toggle} />
            </div>
            <div
              className={`space-x-4 p-4 md:p-0 flex md:flex lg:space-x-0 lg:flex-col lg:space-y-4 w-full ${
                show ? "md:flex" : "hidden"
              }`}
            >
              <TagContainer />
              <RoadmapHeader />
            </div>
          </div>
          <div className="w-full lg:w-3/4 space-y-4 flex flex-col">
            <Navbar numOfFeedback={feedbacks.length} open={openModal} />
            <div className="space-y-4 p-4 md:p-0">
              {feedbacks.map((feedback) => (
                <FeedbackCard
                  feedback={feedback}
                  key={feedback.id || feedback.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} close={closeModal}>
        <FeedbackForm close={closeModal} edit={false} />
      </Modal>
    </div>
  );
};

export default Home;
