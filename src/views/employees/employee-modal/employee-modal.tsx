import { useContext } from "react";

import { Button, Form, Modal } from "react-bootstrap";

import EmployeeContext from "contexts/employees-context";

import Props from "./types";
import { NewEmployee } from "@types";

import esEs from "constants/es-Es.json";

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
        salary: values?.salario.value,
      };
      addEmployee(employee);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>
          {!isDisabled ? "Añadir empleado" : "Descripción"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form name="add-employee">
          <Form.Group className="mb-3">
            <Form.Label>{esEs["employees.table.column.name"]}</Form.Label>
            <Form.Control
              type="text"
              defaultValue={values?.name}
              disabled={isDisabled}
              name="nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{esEs["employees.table.column.age"]}</Form.Label>
            <Form.Control
              type="number"
              defaultValue={values?.age}
              disabled={isDisabled}
              name="edad"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{esEs["employees.table.column.email"]}</Form.Label>
            <Form.Control
              type="email"
              defaultValue={values?.email}
              disabled={isDisabled}
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{esEs["employees.table.column.salary"]}</Form.Label>
            <Form.Control
              type="number"
              defaultValue={values ? `${values?.salary} €` : ""}
              disabled={isDisabled}
              name="salario"
            />
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
