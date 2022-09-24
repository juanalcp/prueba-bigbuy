import { Icon } from "components";

import { RowProps } from "./types";

import detailsIcon from "assets/images/details.svg";
import deleteIcon from "assets/images/delete.svg";

const Row = ({ employee }: RowProps) => {
  return (
    <tr>
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
          <Icon src={detailsIcon} onClick={() => {}} alt={detailsIcon} />
          <Icon src={deleteIcon} onClick={() => {}} alt={deleteIcon} />
        </div>
      </td>
    </tr>
  );
};

export default Row;
