import React, { useState } from "react";
import { useSelector } from "react-redux";
import FeedbackForm from "../components/FeedbackForm";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import RoadMapSection from "../components/RoadMapSection";
import { StoreType } from "../store/types";

const Roadmap = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const feedbackObj = Object.values(
    useSelector((state: StoreType) => state.feedbacks)
  );
  const feedbacks = feedbackObj.sort((a, b) => b?.upVotes - a?.upVotes);
  const inProgress = feedbacks.filter((feed) => feed.status === "In-Progress");
  const live = feedbacks.filter((feed) => feed.status === "Live");
  const planned = feedbacks.filter((feed) => feed.status === "Planned");
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="relative px-8 py-20">
      <div className="2xl:mx-96 xl:mx-48 lg:mx-24 md:mx-6 space-y-8">
        <Navbar numOfFeedback={feedbacks.length} open={openModal} back={true} />
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <RoadMapSection
              title="Planned"
              description=""
              feedbacks={planned}
            />
          </div>
          <div className="w-full md:w-1/3">
            <RoadMapSection
              title="In-Progress"
              description=""
              feedbacks={inProgress}
            />
          </div>
          <div className="w-full md:w-1/3">
            <RoadMapSection title="Live" description="" feedbacks={live} />
          </div>
        </div>
      </div>
      <Modal show={showModal} close={closeModal}>
        <FeedbackForm close={closeModal} edit={false} />
      </Modal>
    </div>
  );
};

export default Roadmap;
