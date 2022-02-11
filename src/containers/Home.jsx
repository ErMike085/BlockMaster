import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { getData } from "../helpers/getData";
import styles from "../styles/HomeGrid.module.css";

const Home = ({ movie, setMovie }) => {
  const traerMovies = async () => {
    const datos = await getData("1");
    setMovie(datos.results);
  };

  useEffect(() => {
    traerMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <div className="col-10 m-auto">
          <div className="container-fluid d-flex">
            <h1 className="mt-5 mb-5 text-light">Todas las peliculas</h1>
          </div>
          <main>
            <div className={styles.Grids}>
              {movie.map((movie) => (
                <Cards key={movie.id} movie={movie} setMovie={setMovie} />
              ))}
            </div>
          </main>
        </div>
      </header>
    </div>
  );
};

export default Home;
