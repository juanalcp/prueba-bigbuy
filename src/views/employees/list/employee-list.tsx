import { useState } from "react";

import Table from "react-bootstrap/Table";

import Props from "./types";
import { Employee } from "@types";

import "./styles.scss";

const getRow = (employee: Employee, index: number) => {
  const key = `employee-${index}`;
  return (
    <tr key={key}>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.salary}</td>
      <td>{"ACCIONES"}</td>
    </tr>
  );
};

const EmployeeList = ({ employees }: Props) => {
  const [offset, setOffset] = useState<number>(0);
  const [numberRows, setNumberRows] = useState<number>(5);

  let currentEmployees = [...employees].slice(offset, offset + numberRows);

  return (
    <>
      <Table className="employee-list" hover>
        <thead>
          <tr className="employee-list__header">
            <th>NOMBRE</th>
            <th>EDAD</th>
            <th>SALARIO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>{currentEmployees.map(getRow)}</tbody>
      </Table>
      <div className="footer-list">TEST</div>
    </>
  );
};

export default EmployeeList;
