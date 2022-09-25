import { useContext } from "react";

import { Icon } from "components";

import EmployeeContext from "contexts/employees-context";

import { RowProps } from "./types";

import detailsIcon from "assets/images/details.svg";
import deleteIcon from "assets/images/delete.svg";

const Row = ({ employee }: RowProps) => {
  const { deleteEmployee, getEmployee } = useContext(EmployeeContext);

  return (
    <tr key={employee.id}>
      <td>
        <div>{employee.name}</div>
      </td>
      <td>
        <div>{employee.age}</div>
      </td>
      <td>
        <div>{employee.salary}</div>
      </td>
      <td>
        <div className="actions-cell">
          <Icon
            src={detailsIcon}
            onClick={() => getEmployee(employee.id)}
            alt={detailsIcon}
          />
          <Icon
            src={deleteIcon}
            onClick={() => deleteEmployee(employee.id)}
            alt={deleteIcon}
          />
        </div>
      </td>
    </tr>
  );
};

export default Row;
