import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Use react-router-dom

import Task from "./components/new/feature"; // Correct import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task/:id" element={<Task />} /> {/* Dynamic Route */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
