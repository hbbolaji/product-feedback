import React from "react";

const AppHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg h-48 flex flex-col justify-end py-12 px-6">
      <h4 className="text-white font-semibold text-xl">Product Feedback</h4>
      <p className="text-white font-light">Feedback board</p>
    </div>
  );
};

export default AppHeader;
