import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { default as Results } from "./Results";
const rutes = () => {
  return (
    <div className="p-4 ">
      <Routes>
        <Route exact path="/goggl/" element={<Navigate replace to="/search" />}></Route>
        <Route exact path="/goggl/search" element={<Results />} />
        <Route exact path="/goggl/images" element={<Results />} />
        <Route exact path="/goggl/news" element={<Results />} />
        <Route exact path="/goggl/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default rutes;
