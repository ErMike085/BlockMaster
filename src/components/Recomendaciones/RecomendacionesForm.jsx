import React from "react";
import { useDispatch } from "react-redux";
import { Button, FormGroup, Modal, ModalBody, ModalFooter } from "reactstrap";
import { actualizarPeliculaASincrono } from "../../actions/actionMovies";

const RecomendacionesForm = ({ insertarCambio, setInsertarCambio, handleInputChange, values }) => {
  const { nombre, año, calificacion, descripcion } = values;
  const dispatch = useDispatch();
  const cerrarModal = () => {
    setInsertarCambio(false);
  };

  const modificarModal = () => {
    dispatch(actualizarPeliculaASincrono(values));
    setInsertarCambio(false);
  };
  return (
    <Modal isOpen={insertarCambio} className="text-white border border-warning rounded">
      <ModalBody>
        <div>
          <h3 className="text-white">Modificar Pelicula</h3>
        </div>
        <FormGroup>
          <p>Nombre:</p>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={nombre}
          />
        </FormGroup>

        <FormGroup>
          <p>Año:</p>
          <input
            id="inputAño"
            type="number"
            className="form-control mt-2"
            name="año"
            required
            autoComplete="off"
            min="1900"
            onChange={handleInputChange}
            value={año}
          />
        </FormGroup>

        <FormGroup>
          <p>Calificacion:</p>
          <input
            id="inputCalificacion"
            type="number"
            className="form-control mt-2"
            name="calificacion"
            required
            autoComplete="off"
            min="1"
            onChange={handleInputChange}
            value={calificacion}
          />
        </FormGroup>

        <FormGroup>
          <p>Descripción:</p>
          <textarea
            id="inputSinopsis"
            className="form-control mt-2"
            name="descripcion"
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={descripcion}
          ></textarea>
        </FormGroup>
      </ModalBody>
      <ModalFooter className="border-0 d-flex justify-content-around">
        <Button color="warning text-white" onClick={() => modificarModal()}>
          Modificar
        </Button>
        <Button color="danger" onClick={() => cerrarModal()}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RecomendacionesForm;
