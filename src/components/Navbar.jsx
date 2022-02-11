import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSearch } from "../helpers/getData";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setMovie }) => {
  const [search, setSearch] = useState();

  const buscarDatos = async () => {
    const datos = await getSearch(search);
    setMovie(datos);
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  console.log(search);
  useEffect(() => {
    if (search) {
      buscarDatos();
    }
  }, [search]);

  return (
    <nav className={`${styles.navcontainer}`}>
      <Link to="/">
        <img src="https://res.cloudinary.com/dpv7hhumv/image/upload/v1639081600/logo-blockBuster_sac9pr.svg" alt="" className="float" />
      </Link>
      <div className="">
        <div className={`${styles.navcontainer}`}>
          <Link className="nav-link text-warning " to="/">
            Todas
          </Link>
          <Link className="nav-link text-warning" to="/MasValoradas">
            Más valoradas
          </Link>
          <Link className="nav-link text-warning" to="/MenosValoradas">
            Menos valoradas
          </Link>
        </div>
      </div>
      <div>
        <form className="">
          <input type="text" placeholder="Busca tu pelicula aquí" className="text-warning" onChange={handleChange} />
          <button className="text-warning">Buscar</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
