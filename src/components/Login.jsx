import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginAsincrono, loginGoogle } from "../actions/actionLoginRegister";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <div className="">
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
          <Form>
            <div>
              <label htmlFor="emailLogin">Email</label>
              <Field type="email" id="emailLogin" name="email" placeholder="Escribe el correo" />
              <ErrorMessage name="email" component={() => <div>{errors.email}</div>} />
            </div>
            <div>
              <label htmlFor="passwordLogin">Contraseña</label>
              <Field type="password" id="passwordLogin" name="password" placeholder="Escribe la contraseña" />
            </div>
            <div>
              <button type="submit">Enviar</button>
              <button type="button" onClick={handleGoogle}>
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
                <p>| Login con google</p>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
