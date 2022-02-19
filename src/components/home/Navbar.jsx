import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/actionLoginRegister";
import { getSearch } from "../../helpers/getData";
import styles from "../../styles/Navbar.module.css";
import Ubicacion from "./Ubicación";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Navbar = ({ setMovie, search, setSearch }) => {
  const dispatch = useDispatch();

  const buscarDatos = async () => {
    const datos = await getSearch(search);
    setMovie(datos.results);
  };

  const handleChange = ({ target }) => {
    if (target.value !== "") {
      setSearch(target.value);
    } else {
      setSearch(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (search) {
      buscarDatos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <nav className={`${styles.navcontainer}`}>
      <Link to="/">
        <img src="https://res.cloudinary.com/dpv7hhumv/image/upload/v1639081600/logo-blockBuster_sac9pr.svg" alt="" className="float" />
      </Link>
      <div id="nav-ubicacion">
        <span className={`${styles.direc} text-warning`}>
          <HiOutlineLocationMarker /> <Ubicacion />
        </span>
      </div>
      <div className={`${styles.navLinks}`}>
        <Link className="nav-link text-warning " to="/">
          Todas
        </Link>
        <Link className="nav-link text-warning" to="/mas-valoradas">
          Más valoradas
        </Link>
        <Link className="nav-link text-warning" to="/menos-valoradas">
          Menos valoradas
        </Link>
        <Link className="nav-link text-warning" to="/recomendaciones">
          Haz tu recomendación
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="d-flex border border-warning">
          <input type="text" placeholder="Busca tu pelicula aquí" className={`text-warning ${styles.input}`} onChange={handleChange} />
          <button className="text-warning btn">Buscar</button>
        </form>
      </div>
      <button className="btn btn-warning" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
