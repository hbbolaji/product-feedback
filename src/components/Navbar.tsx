import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { theme, changeTheme } = useContext(themeContext);
  return (
    <div className="w-full h-16 rounded-lg bg-indigo-900 p-4 flex items-center space-x-6">
      <div
        className="cursor-pointer text-white text-xl"
        onClick={() => changeTheme()}
      >
        {theme ? <BsSun /> : <BsMoon />}
      </div>
      <div className="text-white">Navbar</div>
    </div>
  );
};

export default Navbar;
