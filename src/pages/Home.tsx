import React from "react";
import AppHeader from "../components/AppHeader";
import FeedbackCard from "../components/FeedbackCard";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import TagContainer from "../components/TagContainer";

const Home = () => {
  return (
    <div className="2xl:mx-96 xl:mx-48 lg:mx-24 md:mx-6">
      <div className="flex flex-col lg:flex-row py-24 space-x-0 lg:space-x-4 space-y-6 lg:space-y-0">
        <div className="w-full flex lg:flex-col space-x-4 lg:space-x-0 lg:w-1/4 lg:space-y-4">
          <AppHeader />
          <TagContainer />
          <Roadmap />
        </div>
        <div className="w-full lg:w-3/4 space-y-4 flex flex-col">
          <Navbar />
          <div className="space-y-4">
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
