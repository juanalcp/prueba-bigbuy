import { useState } from "react";

import Table from "react-bootstrap/Table";
import Row from "./employee-row";
import RowsSelect from "./rows-select";

import Props from "./types";

import esEs from "constants/es-Es.json";

import "./styles.scss";
import Pagination from "./pagination";

const EmployeeList = ({ employees }: Props) => {
  const [offset, setOffset] = useState<number>(0);
  const [numberRows, setNumberRows] = useState<number>(5);

  let currentEmployees = [...employees].slice(offset, offset + numberRows);

  console.log(employees.length);

  const handleChangePage = (page: number) => {
    setOffset((page - 1) * numberRows);
  };

  return (
    <>
      <Table className="employee-list">
        <thead>
          <tr className="employee-list__header">
            <th>{esEs["employees.table.column.name"]}</th>
            <th>{esEs["employees.table.column.age"]}</th>
            <th>{esEs["employees.table.column.salary"]}</th>
            <th>{esEs["employees.table.column.actions"]}</th>
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
      <Pagination
        numberElements={employees.length}
        numberRows={numberRows}
        onChange={handleChangePage}
      />
    </>
  );
};

export default EmployeeList;
