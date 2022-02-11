// Url peliculas temporada https://api.themoviedb.org/3/discover/movie?api_key=a049d6086798142f1ce78897272be805&language=es
// Url buscar peliculas https://api.themoviedb.org/3/search/movie?query=hola&api_key=a049d6086798142f1ce78897272be805&language=es
// Traer video de la película https://api.themoviedb.org/3/movie/51/videos?api_key=a049d6086798142f1ce78897272be805&language=es
const tempoMovies = "https://api.themoviedb.org/3/discover/movie?api_key=a049d6086798142f1ce78897272be805&language=es&page=";
const searchUno = "https://api.themoviedb.org/3/search/movie?query=";
const searchDos = "&api_key=a049d6086798142f1ce78897272be805&language=es";
export const urlVideo = "https://www.youtube.com/watch?v=";
const traerVideo = "https://api.themoviedb.org/3/movie/";
const traerVideo2 = "/videos?api_key=a049d6086798142f1ce78897272be805&language=es";

export const getData = async (page) => {
  const resp = await fetch(tempoMovies + page);
  const data = await resp.json();
  return data;
};

export const getSearch = async (search) => {
  const resp = await fetch(searchUno + search + searchDos);
  const data = await resp.json();
  return data;
};

export const buscarVideo = async (id) => {
  const resp = await fetch(traerVideo + id + traerVideo2);
  const data = await resp.json();
  return data;
};