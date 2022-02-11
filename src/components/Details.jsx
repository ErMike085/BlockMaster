import React from "react";
import styles from "../styles/Details.module.css";

const Details = (movie) => {
  const { id, overview, title, release_date, imagenUrl, vote_average } = movie;
  // const convertirTiempo = (minutos) => {
  //   let horas = Math.floor(minutos / 60);
  //   minutos = minutos % 60;
  //   return [horas, "h ", minutos, "m"];
  // };
  console.log(id);
  return (
    <div
      className="modal"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content border-warning ">
          <div className={styles.detailsContainer}>
            <img className={`${styles.Columns} ${styles.image}`} src={imagenUrl} alt={title} />
            <div className={styles.Columns}>
              <p className={styles.title}>
                <strong>{title}</strong>
              </p>
              <p>{overview}</p>
              <div>
                <ul className={styles.list}>
                  {/* <li className={styles.listItem1}><p>{genres.map((genero) => genero.name).join("/")}</p></li> */}
                  <li className={styles.listItem}>
                    <p>{release_date}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Puntiación: {vote_average}</p>
                  </li>
                  {/* <li className={styles.listItem}><p>{convertirTiempo(runtime)}</p></li> */}
                </ul>
                <br />
                <button type="button" className="btn btn-warning " data-bs-dismiss="modal">
                  Ver después
                </button>
                <button type="button" className="btn btn-warning float-end" data-bs-dismiss="modal">
                  Ver trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
