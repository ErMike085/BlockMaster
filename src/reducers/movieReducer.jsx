import { types } from "../types/types";

const initialstate = {
  movies: [],
};

export const movieReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.addMovie:
      return {
        movies: [action.payload],
      };
    case types.list:
      return {
        movies: [...action.payload],
      };
    case types.eliminar:
      return {
        movies: state.movies.filter((movie) => movie.descripcion !== action.payload),
      };
    default:
      return state;
  }
};
