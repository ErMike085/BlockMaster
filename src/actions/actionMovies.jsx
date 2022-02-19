import { types } from "../types/types";
import { db } from "../firebase/foribaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, updateDoc } from "firebase/firestore";

export const registerMovie = (movie) => {
  return (dispatch) => {
    addDoc(collection(db, "moviesdb"), movie)
      .then(() => dispatch(registerMovieSincrono(movie), dispatch(listarMoviesAsincrono())))
      .catch((e) => console.log(e));
  };
};

export const registerMovieSincrono = (movie) => {
  return {
    type: types.addMovie,
    payload: movie,
  };
};

export const listarMoviesAsincrono = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "moviesdb"));
    const movies = [];
    querySnapshot.forEach((e) => {
      movies.push({
        ...e.data(),
      });
    });
    dispatch(listarMoviesSincrono(movies));
  };
};

export const listarMoviesSincrono = (movie) => {
  return {
    type: types.list,
    payload: movie,
  };
};

export const actualizarPeliculaASincrono = (pelicula) => {
  return async (dispatch) => {
    const coleccion = collection(db, "moviesdb");
    const consulta = query(coleccion, where("id", "==", pelicula.id));
    const datos = await getDocs(consulta);
    datos.forEach((docu) => {
      const nuevosCambios = {
        nombre: pelicula.nombre,
        año: pelicula.año,
        calificacion: pelicula.calificacion,
        descripcion: pelicula.descripcion,
      };
      updateDoc(doc(db, "moviesdb", docu.id), nuevosCambios);
    });
    dispatch(listarMoviesAsincrono());
  };
};

export const eliminarMoviesAsincrono = (id) => {
  return async (dispatch) => {
    const coleccion = collection(db, "moviesdb");
    const consulta = query(coleccion, where("id", "==", id));
    const datos = await getDocs(consulta);
    datos.forEach((e) => {
      deleteDoc(doc(db, "moviesdb", e.id));
    });
    dispatch(eliminarMoviesSincrono(id));
    dispatch(listarMoviesAsincrono());
  };
};

export const eliminarMoviesSincrono = (id) => {
  return {
    type: types.delete,
    payload: id,
  };
};
