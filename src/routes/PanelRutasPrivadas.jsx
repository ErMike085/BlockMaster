import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Trailers from "../components/home/Trailers";
import Home from "../containers/Home";
import MasValoradas from "../containers/MasValoradas";
import MenosValoradas from "../containers/MenosValoradas";
import Recomendaciones from "../containers/Recomendaciones";

export const PanelRutasPrivadas = ({ movie, setMovie, search, setSearch, page, setPage }) => {
  return (
    <div>
      <Navbar setMovie={setMovie} search={search} setSearch={setSearch} page={page} />
      <Routes>
        <Route path="/" element={<Home movie={movie} setMovie={setMovie} search={search} page={page} setPage={setPage} />} />
        <Route
          path="/mas-valoradas"
          element={<MasValoradas movie={movie} setMovie={setMovie} search={search} page={page} setPage={setPage} />}
        />
        <Route
          path="/menos-valoradas"
          element={<MenosValoradas movie={movie} setMovie={setMovie} search={search} page={page} setPage={setPage} />}
        />
        <Route path="/trailer/:id" element={<Trailers />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
