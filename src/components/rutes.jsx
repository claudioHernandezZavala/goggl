import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { default as Results } from "./Results";
const rutes = () => {
  return (
    <div className="p-4 ">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />}></Route>
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/images" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default rutes;
