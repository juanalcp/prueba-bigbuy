import { useState } from "react";

import Table from "react-bootstrap/Table";
import Row from "./employee-row";
import RowsSelect from "./rows-select";

import Props from "./types";

import "./styles.scss";

const EmployeeList = ({ employees }: Props) => {
  const [offset, setOffset] = useState<number>(0);
  const [numberRows, setNumberRows] = useState<number>(5);

  let currentEmployees = [...employees].slice(offset, offset + numberRows);

  return (
    <>
      <Table className="employee-list">
        <thead>
          <tr className="employee-list__header">
            <th>NOMBRE</th>
            <th>EDAD</th>
            <th>SALARIO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((x, index) => (
            <Row key={`row-${index}`} employee={x} />
          ))}
        </tbody>
      </Table>
      <div className="footer-list">
        <RowsSelect numberRows={numberRows} setNumberRows={setNumberRows} />
      </div>
      <div>Aquí va la paginación</div>
    </>
  );
};

export default EmployeeList;
