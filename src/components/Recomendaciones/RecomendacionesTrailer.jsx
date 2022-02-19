import React from "react";
import { Modal, ModalBody } from "reactstrap";

const RecomendacionesTrailer = ({ trailer, setTrailer, movie }) => {
  return (
    <Modal isOpen={trailer}>
      <ModalBody className="d-flex justify-content-center align-middle">
        <iframe
          width="560"
          height="315"
          src={movie.video}
          title={movie.nombre}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="m-5"
        ></iframe>
      </ModalBody>
      <button className="btn btn-danger" onClick={() => setTrailer(false)}>
        Cerrar
      </button>
    </Modal>
  );
};

export default RecomendacionesTrailer;
