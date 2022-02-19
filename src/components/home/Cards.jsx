import React, { useEffect, useState } from "react";
import { buscarVideo } from "../../helpers/getData";
import styles from "../../styles/Cards.module.css";
import Details from "./Details";

const Cards = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const [videoUrl, setVideoUrl] = useState([]);

  const traerVideos = async () => {
    const video = await buscarVideo(movie.id);
    setVideoUrl(video);
  };

  useEffect(() => {
    traerVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div data-bs-toggle="modal" data-bs-target={`#id${movie.id}`}>
        <div className={`${styles.Cards}`}>
          <label className="Calificacion">
            <span className="estrella">★</span> {movie.vote_average}
          </label>
          <img src={imageUrl} className={styles.movieImage} width={230} height={345} alt={movie.title}></img>
        </div>
      </div>
      <Details
        id={`id${movie.id}`}
        vote_average={movie.vote_average}
        overview={movie.overview}
        title={movie.title}
        genres={movie.genres}
        runtime={movie.runtime}
        release_date={movie.release_date}
        imagenUrl={imageUrl}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default Cards;
