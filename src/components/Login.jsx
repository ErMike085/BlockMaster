import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginAsincrono, loginGoogle } from "../actions/actionLoginRegister";
import { useDispatch } from "react-redux";
import styles from "../styles/LoginRegister.module.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <div className={styles.form}>
      <h1 className={styles.titulo}>LOGIN</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(valores) => {
          let errores = {};
          if (!valores.email) {
            errores.email = "Por favor ingresa un correo";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          const { email, password } = valores;
          resetForm();
          // setTimeout(() => navigate("/"), 1000);
          dispatch(loginAsincrono(email, password));
        }}
      >
        {({ errors }) => (
          <Form className={styles.form}>
            <div>
              <p>Email</p>
              <Field type="email" className="form-control mb-2" name="email" placeholder="Escribe el correo" />
              <ErrorMessage name="email" component={() => <div className={styles.alerta}>{errors.email}</div>} />
            </div>
            <div>
              <p>Contraseña</p>
              <Field type="password" name="password" className="form-control" placeholder="Escribe la contraseña" />
            </div>
            <div className="mt-3 mb-3">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>También puedes hacer login con</p>
      <div className="">
        <button type="button" className={`btn ${styles.google}`} onClick={handleGoogle}>
          <img
            className="google-icon me-2"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
          <p>| google</p>
        </button>
      </div>
      <div>
        <Link to="/registro" className="text-decoration-none text-white">
          Sí todavía no tienes cuenta, registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
