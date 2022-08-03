import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route index element={<Home />} />
          <Route path="feedback/:id" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
