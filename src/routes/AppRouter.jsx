import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { PanelRutasPrivadas } from "./PanelRutasPrivadas";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const traerAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    traerAuth();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/registro"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <PanelRutasPrivadas movie={movie} setMovie={setMovie} search={search} setSearch={setSearch} page={page} setPage={setPage} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
