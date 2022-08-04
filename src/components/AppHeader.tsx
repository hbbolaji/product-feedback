import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

interface PropsType {
  show: boolean;
  toggle: () => void;
}

const AppHeader: React.FC<PropsType> = ({ show, toggle }) => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 md:rounded-lg h-16 md:h-48 flex items-center md:items-end justify-between py-12 px-6">
      <div className="flex flex-col justify-center md:justify-end">
        <h4 className="text-white font-semibold text-xl">Product Feedback</h4>
        <p className="text-white font-light">Feedback board</p>
      </div>
      <div
        className="md:hidden text-5xl text-white cursor-pointer"
        onClick={toggle}
      >
        {show ? <BiX /> : <BiMenu />}
      </div>
    </div>
  );
};

export default AppHeader;
