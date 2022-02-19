import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { registerMovie } from "../../actions/actionMovies";
import { fileUpload } from "../../helpers/FileUpload";
import styles from "../../styles/Recomendaciones.module.css";

const AgregarMovie = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, setValues, reset] = useForm({
    imagen: "",
    video: "",
    nombre: "",
    año: "",
    calificacion: "",
    descripcion: "",
  });

  const { imagen, nombre, año, calificacion, descripcion, video } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      imagen,
      video,
      nombre,
      año,
      calificacion,
      descripcion,
    };
    dispatch(registerMovie(data));
    reset();
  };

  const handleImageClick = () => {
    document.querySelector("#inputImagen").click();
  };

  const handleVideoClick = () => {
    document.querySelector("#inputVideo").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((resp) => {
        setValues({
          ...values,
          imagen: resp,
        });
      })
      .catch((e) => console.log(e));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((resp) => {
        setValues({
          ...values,
          video: resp,
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <header>
        <h2 className="text-center text-white mb-4">Agregar Películas</h2>
      </header>
      <div className={styles.contenedor}>
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            id="inputImagen"
            type="file"
            className="form-control "
            placeholder="Seleccionar Imagen"
            name="imagen"
            required
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className="d-grid gap-2 mx-auto mt-2">
            <button type="button" className="btn btn-warning mb-2 " onClick={() => handleImageClick()}>
              Seleccionar Imagen
            </button>
          </div>

          <input
            id="inputVideo"
            type="file"
            className="form-control "
            placeholder="Seleccionar Trailer"
            name="video"
            required
            style={{ display: "none" }}
            onChange={handleVideoChange}
          />
          <div className="d-grid gap-2 mx-auto">
            <button type="button" className="btn btn-warning mb-2 " onClick={() => handleVideoClick()}>
              Seleccionar Trailer (opcional)
            </button>
          </div>

          <input
            id="inputNombre"
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={nombre}
          />

          <input
            id="inputAño"
            type="number"
            className="form-control mt-2"
            placeholder="Año"
            name="año"
            required
            autoComplete="off"
            min="1900"
            onChange={handleInputChange}
            value={año}
          />
          <input
            id="inputCalificacion"
            type="number"
            className="form-control mt-2"
            placeholder="Calificacion"
            name="calificacion"
            required
            autoComplete="off"
            min="1"
            onChange={handleInputChange}
            value={calificacion}
          />

          <textarea
            id="inputSinopsis"
            className="form-control mt-2"
            placeholder="Descripción"
            name="descripcion"
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={descripcion}
          ></textarea>

          <div className="d-grid gap-2 mx-auto mt-2">
            <button type="submit" className="btn btn-warning">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgregarMovie;
