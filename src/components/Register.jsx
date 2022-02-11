import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAsincrono } from "../actions/actionLoginRegister";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="">
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
          <Form>
            <div>
              <label htmlFor="nameRegister"></label>
              <Field type="text" id="nameRegister" name="name" placeholder="Escribe el nombre" />
              <ErrorMessage name="name" component={() => <div>{errors.name}</div>} />
            </div>
            <div>
              <label htmlFor="emailRegister"></label>
              <Field type="email" id="emailRegister" name="email" placeholder="Escribe el correo" />
              <ErrorMessage name="email" component={() => <div>{errors.email}</div>} />
            </div>
            <div>
              <label htmlFor="passwordRegister"></label>
              <Field type="password" id="passwordRegister" name="password" placeholder="Escribe la contraseña" required />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
