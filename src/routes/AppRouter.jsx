import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Home from "../containers/Home";

const AppRouter = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  return (
    <BrowserRouter>
      <Navbar setMovie={setMovie} search={search} setSearch={setSearch} page={page} />
      <Routes>
        <Route path="/" element={<Home movie={movie} setMovie={setMovie} search={search} page={page} setPage={setPage} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
