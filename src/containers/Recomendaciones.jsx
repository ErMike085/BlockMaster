import React from "react";
import AgregarMovie from "../components/Recomendaciones/AgregarMovie";
import ListarRecomendaciones from "../components/Recomendaciones/ListarRecomendaciones";

const Recomendaciones = () => {
  return (
    <div>
      <h1 className="text-white">Agrega tu recomendación</h1>
      <AgregarMovie />
      <h1 className="text-white">Tus recomendaciones</h1>
      <ListarRecomendaciones />
    </div>
  );
};

export default Recomendaciones;
