import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Home from "../containers/Home";

const AppRouter = () => {
  const [movie, setMovie] = useState([]);
  return (
    <BrowserRouter>
      <Navbar movie={movie} setMovie={setMovie} />
      <Routes>
        <Route path="/" element={<Home movie={movie} setMovie={setMovie} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
