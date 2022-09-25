import { useContext } from "react";

import { Button, Form, Modal } from "react-bootstrap";

import EmployeeContext from "contexts/employees-context";

import { NewEmployee } from "@types";
import Props from "./types";

const EmployeeModal = ({ show, handleClose, values }: Props) => {
  const isDisabled = !!values;
  const { addEmployee } = useContext(EmployeeContext);

  const handleCreateEmployee = () => {
    const values = document.forms.namedItem("add-employee");
    if (values) {
      const employee: NewEmployee = {
        name: values?.nombre.value,
        age: values?.edad.value,
        email: values?.email.value,
        salary: values?.salario.value
      };
      addEmployee(employee);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Añadir empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="create-employee-form" name="add-employee">
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              defaultValue={values?.name}
              disabled={isDisabled}
              name="nombre"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              defaultValue={values?.age}
              disabled={isDisabled}
              name="edad"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              defaultValue={values?.email}
              disabled={isDisabled}
              name="email"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Salario</Form.Label>
            <Form.Control
              defaultValue={values?.salary}
              disabled={isDisabled}
              name="salario"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {!isDisabled && <Button onClick={handleCreateEmployee}>Guardar</Button>}
        <Button onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeModal;
