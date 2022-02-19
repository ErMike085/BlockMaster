import React, { useState } from "react";
import styles from "../../styles/Details.module.css";
import { Modal, ModalBody } from "reactstrap";
import RecomendacionesTrailer from "./RecomendacionesTrailer";

const RecomendacionesCards = ({ movie, insertarModal, setInsertarModal }) => {
  const [trailer, setTrailer] = useState(false);
  const handleClickModificar = () => {
    setInsertarModal(false);
  };

  return (
    <>
      <Modal isOpen={insertarModal}>
        <ModalBody>
          <div className={styles.detailsContainer2}>
            <img className={`${styles.image2}`} src={movie.imagen} alt={movie.nombre} />
            <div className={styles.Columns2}>
              <p className={styles.title}>
                <strong>{movie.nombre}</strong>
              </p>
              <p>{movie.descripcion}</p>
              <div>
                <ul className={styles.list}>
                  {/* <li className={styles.listItem1}><p>{genres.map((genero) => genero.name).join("/")}</p></li> */}
                  <li className={styles.listItem}>
                    <p>{movie.año}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Puntiación: {movie.calificacion}</p>
                  </li>
                  {/* <li className={styles.listItem}><p>{convertirTiempo(runtime)}</p></li> */}
                </ul>
                <div className="d-flex justify-content-around">
                  <button type="button" className="btn btn-warning" onClick={() => handleClickModificar()}>
                    Ver después
                  </button>
                  <button type="button" className="btn btn-warning" onClick={() => setTrailer(true)}>
                    Ver trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <RecomendacionesTrailer trailer={trailer} setTrailer={setTrailer} movie={movie} />
    </>
  );
};

export default RecomendacionesCards;
