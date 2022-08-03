import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { themeContext } from "./context/ThemeContext";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";

function App() {
  const { theme } = useContext(themeContext);
  return (
    <Router>
      <div className={theme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <Routes>
            <Route index element={<Home />} />
            <Route path="feedback/:id" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
