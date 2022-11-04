import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./user/auth/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
