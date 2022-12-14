import { useContext } from "react";

import { Icon } from "components";
import EmployeeModal from "../employee-modal";

import useShowModal from "hooks/use-show-modal";

import EmployeeContext from "contexts/employees-context";

import esEs from "constants/es-Es.json";

import { RowProps } from "./types";

import detailsIcon from "assets/images/details.svg";
import deleteIcon from "assets/images/delete.svg";

const parseSalary = (salary: number): string =>
  salary
    ? `${Math.round((salary * 12) / 1000)}K`
    : esEs["employees.table.column.notDefined"];

const Row = ({ employee }: RowProps) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const { handleClose, handleShow, shouldShowModal } = useShowModal();

  return (
    <>
      <tr key={employee.id}>
        <td>
          <div>{employee.name}</div>
        </td>
        <td>
          <div>{employee.age}</div>
        </td>
        <td>
          <div>{parseSalary(employee.salary)}</div>
        </td>
        <td>
          <div className="actions-cell">
            <Icon src={detailsIcon} onClick={handleShow} alt={detailsIcon} />
            <Icon
              src={deleteIcon}
              onClick={() => deleteEmployee(employee.id)}
              alt={deleteIcon}
            />
          </div>
        </td>
      </tr>
      <EmployeeModal
        show={shouldShowModal}
        handleClose={handleClose}
        values={employee}
      />
    </>
  );
};

export default Row;
