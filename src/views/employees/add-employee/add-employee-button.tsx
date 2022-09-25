import { useContext } from "react";

import { Icon } from "components";
import Button from "react-bootstrap/Button";

import useShowModal from "hooks/use-show-modal";

import addUser from "assets/images/add-user.svg";

import "./styles.scss";
import EmployeeModal from "../employee-modal/employee-modal";

const AddEmployeeButton = () => {
  const { handleClose, handleShow, shouldShowModal } = useShowModal();

  return (
    <>
      <Button
        className="add-employee-button"
        variant="warning"
        onClick={handleShow}
      >
        <div>
          <Icon src={addUser} alt={addUser} />
          <span>Nuevo empleado</span>
        </div>
      </Button>
      <EmployeeModal show={shouldShowModal} handleClose={handleClose} />
    </>
  );
};

export default AddEmployeeButton;
