import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarVideo } from "../../helpers/getData";
import styles from "../../styles/Trailers.module.css";

const Trailers = () => {
  const { id } = useParams();
  const [peliculas, setPeliculas] = useState([]);

  const getPelicula = async () => {
    const pelicula = await buscarVideo(id);
    setPeliculas(pelicula.results);
  };

  const condicional = () => {
    if (peliculas[0] === undefined) {
      return <h1 className="text-white">No se encontró ningún trailer</h1>;
    } else {
      return (
        <div>
          {peliculas.map((pelicula) => (
            <iframe
              key={pelicula.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${pelicula.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="m-5"
            ></iframe>
          ))}
        </div>
      );
    }
  };
  useEffect(() => {
    getPelicula();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.contenedor}>
      <h1 className="text-white mt-2 mb-5" id="titulo">
        Trailers
      </h1>
      {condicional()}
    </div>
  );
};

export default Trailers;
