import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import FeedbackCard from "../components/FeedbackCard";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import TagContainer from "../components/TagContainer";

const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggle = () => {
    setShow((prevState) => !prevState);
  };
  return (
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
            <Roadmap />
          </div>
        </div>
        <div className="w-full lg:w-3/4 space-y-4 flex flex-col">
          <Navbar />
          <div className="space-y-4 p-4 md:p-0">
            {[1, 2, 3, 4, 5].map((num) => (
              <FeedbackCard key={num} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
