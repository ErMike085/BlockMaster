import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../components/home/Cards";
import { masValoradas } from "../helpers/getData";
import styles from "../styles/HomeGrid.module.css";

const MasValoradas = ({ movie, setMovie, search, page, setPage }) => {
  const traerMovies = async () => {
    const datos = await masValoradas(page);
    setMovie((prevMovie) => prevMovie.concat(datos.results));
  };

  useEffect(() => {
    if (search === null || search === "") {
      traerMovies();
    }
    console.log(movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <main>
      <h1 className="d-flex justify-content-center text-white">Más Valoradas</h1>
      <InfiniteScroll dataLength={movie.length} hasMore={true} next={() => setPage((prevPage) => prevPage + 1)}>
        <div className={styles.Grids}>
          {movie.map((movie) => (
            <Cards key={movie.id} movie={movie} setMovie={setMovie} />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default MasValoradas;
