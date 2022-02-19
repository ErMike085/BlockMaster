import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import carousel from "../../helpers/trailers.json";
import "../../styles/Carrusel.css";

class Carrusel extends Component {
  render() {
    return (
      <Carousel className="Carrusel">
        {carousel.map((item) => (
          <div key={item.id} className="Container-Carrusel">
            <div>
              <iframe
                width="1510"
                height="400"
                src={item.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Carrusel;
