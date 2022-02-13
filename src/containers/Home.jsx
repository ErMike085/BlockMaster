import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../components/Cards";
import Carrusel from "../components/Carrusel";
import { getData } from "../helpers/getData";
import styles from "../styles/HomeGrid.module.css";

const Home = ({ movie, setMovie, search, page, setPage }) => {
  const traerMovies = async () => {
    const datos = await getData(page);
    setMovie((prevMovie) => prevMovie.concat(datos.results));
  };

  useEffect(() => {
    if (search === null || search === "") {
      traerMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  return (
    <div>
      <Carrusel />
      <header>
        <div className="col-10 m-auto">
          <div className="container-fluid d-flex">
            <h1 className="mt-5 mb-5 text-light">Todas las peliculas</h1>
          </div>
          <main>
            <InfiniteScroll dataLength={movie.length} hasMore={true} next={() => setPage((prevPage) => prevPage + 1)}>
              <div className={styles.Grids}>
                {movie.map((movie) => (
                  <Cards key={movie.id} movie={movie} setMovie={setMovie} />
                ))}
              </div>
            </InfiniteScroll>
          </main>
        </div>
      </header>
    </div>
  );
};

export default Home;
