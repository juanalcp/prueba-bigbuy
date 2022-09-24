import { Icon } from "components";
import Button from "react-bootstrap/Button";

import addUser from "assets/images/add-user.svg";

import "./styles.scss";

const AddEmployeeButton = () => (
  <Button
    className="add-employee-button"
    variant="warning"
    onClick={() => console.log("Creating new employee")}
  >
    <div>
      <Icon src={addUser} />
      <span>Nuevo empleado</span>
    </div>
  </Button>
);

export default AddEmployeeButton;
