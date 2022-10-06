import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import { BsSun, BsMoon, BsPlus, BsChevronDown } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC<{
  numOfFeedback: number;
  open: () => void;
  back?: boolean;
}> = ({ numOfFeedback, open, back }) => {
  const navigate = useNavigate();
  const { theme, changeTheme } = useContext(themeContext);
  return (
    <div className="w-full h-20 md:rounded-lg bg-indigo-900 p-4 flex items-center space-x-8 text-sm">
      {!back && (
        <div
          className="cursor-pointer text-white text-xl"
          onClick={() => changeTheme()}
        >
          {theme ? <BsSun /> : <BsMoon />}
        </div>
      )}
      {!back && (
        <div className="text-white">
          <p className="text-white text-lg md:text-sm">
            {numOfFeedback} Suggestions
          </p>
        </div>
      )}
      {!back && (
        <div className="text-white space-x-2 hidden md:flex">
          <p className="text-gray-400">Sort by: </p>
          <div className="flex items-center space-x-1 cursor-pointer">
            <p className="font-semibold">Most Upvotes</p>
            <BsChevronDown />
          </div>
        </div>
      )}
      {back && (
        <div className="space-y-2">
          <div
            className="text-white text-sm flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            {" "}
            <AiOutlineLeft className="text-xl" />
            <p>go back</p>
          </div>
          <h2 className="text-white font-semibold text-xl">Roadmap</h2>
        </div>
      )}
      <div className="flex-1 flex justify-end">
        <button
          className="flex items-center py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold"
          onClick={open}
        >
          <BsPlus className="font-bold text-2xl mr-2" />
          Add Feedback
        </button>
      </div>
    </div>
  );
};

export default Navbar;
