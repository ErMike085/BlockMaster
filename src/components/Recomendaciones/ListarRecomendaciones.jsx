import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { eliminarMoviesAsincrono, listarMoviesAsincrono } from "../../actions/actionMovies";
import RecomendacionesCards from "./RecomendacionesCards";
import styles from "../../styles/HomeGrid.module.css";
import RecomendacionesForm from "./RecomendacionesForm";
import { useForm } from "../../hooks/useForm";
const ListarRecomendaciones = () => {
  const [insertarModal, setInsertarModal] = useState(false);
  const [insertarCambio, setInsertarCambio] = useState(false);
  const dispatch = useDispatch();

  const [values, handleInputChange, setValues] = useForm({
    id: "",
    nombre: "",
    año: "",
    calificacion: "",
    descripcion: "",
  });

  const { movies } = useSelector((store) => store.movie);

  const handleClickModificar = (pelicula) => {
    setInsertarCambio(true);
    setValues(pelicula);
  };

  const handleClickModal = () => {
    setInsertarModal(true);
  };

  useEffect(() => {
    dispatch(listarMoviesAsincrono());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col" className="text-white">
              Imagen
            </th>
            <th scope="col" className="text-white">
              Nombre
            </th>
            <th scope="col" className="text-white">
              Año
            </th>
            <th scope="col" className="text-white">
              Descripcion
            </th>
            <th scope="col" className="text-white">
              Calificación
            </th>
            <th scope="col" className="text-white">
              Modificar
            </th>
            <th scope="col" className="text-white">
              Eliminar
            </th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => (
            <tr key={index} className="text-white">
              <td>
                <img src={movie.imagen} alt="imagen moviea" width="50" />
              </td>
              <td>{movie.nombre}</td>
              <td>{movie.año}</td>
              <td>{movie.descripcion}</td>
              <td>{movie.calificacion}</td>
              <td>
                <button type="button" onClick={() => handleClickModificar(movie)} className="btn btn-warning btn-sm ">
                  Modificar
                </button>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(eliminarMoviesAsincrono(movie.id))} className="btn btn-danger btn-sm ">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.Grids}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <button className="border-0" onClick={() => handleClickModal()}>
              <div className={`${styles.Cards}`}>
                <label className="Calificacion">
                  <span className="estrella">★</span> {movie.calificacion}
                </label>
                <img src={movie.imagen} className={styles.movieImage} width={230} height={345} alt={movie.nombre}></img>
              </div>
            </button>
            <RecomendacionesCards key={movie.id} movie={movie} setInsertarModal={setInsertarModal} insertarModal={insertarModal} />
          </div>
        ))}
      </div>
      <RecomendacionesForm
        movie={movies}
        setInsertarCambio={setInsertarCambio}
        insertarCambio={insertarCambio}
        handleInputChange={handleInputChange}
        values={values}
      />
    </div>
  );
};

export default ListarRecomendaciones;
