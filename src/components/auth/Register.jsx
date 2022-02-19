import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAsincrono } from "../../actions/actionLoginRegister";
import styles from "../../styles/LoginRegister.module.css";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.form}>
      <h1 className={styles.titulo}>Registro</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(valores) => {
          let errores = {};

          if (!valores.name) {
            errores.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre no puede contener carácteres especiales, solo letras y espacios";
          }

          if (!valores.email) {
            errores.email = "Por favor ingresa un correo";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          const { email, password, name } = valores;
          dispatch(registerAsincrono(email, password, name));
          resetForm();
          setTimeout(() => navigate("/"), 1000);
        }}
      >
        {({ errors }) => (
          <Form className={styles.form}>
            <div>
              <p>Nombre</p>
              <Field type="text" className="form-control mb-2" name="name" placeholder="Escribe el nombre" />
              <ErrorMessage name="name" component={() => <div className={styles.alerta}>{errors.name}</div>} />
            </div>
            <div>
              <p>Email</p>
              <Field type="email" className="form-control mb-2" name="email" placeholder="Escribe el correo" />
              <ErrorMessage name="email" component={() => <div className={styles.alerta}>{errors.email}</div>} />
            </div>
            <div>
              <p>Contraseña</p>
              <Field type="password" className="form-control mb-2" name="password" placeholder="Escribe la contraseña" required />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <Link to="/login" className="text-decoration-none text-white">
          Sí ya tienes cuenta, login aquí
        </Link>
      </div>
    </div>
  );
};

export default Register;
