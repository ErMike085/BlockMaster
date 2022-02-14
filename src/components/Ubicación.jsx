import React, { useEffect, useState } from "react";

const Ubicacion = () => {
  let url = "";

  const [ubicacion, setUbicacion] = useState("");

  useEffect(() => {
    getCoordenadas();
  });

  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI";
      getUbicacion(url);
    });
  };

  const getUbicacion = async (endpoint) => {
    const resp = await fetch(endpoint);
    const { results } = await resp.json();
    setUbicacion(results[0].address_components[2].long_name + " " + results[0].address_components[0].long_name);
  };

  return <div>{ubicacion}</div>;
};

export default Ubicacion;
