import { useState } from "react";

const useShowModal = () => {
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);

  const handleClose = () => {
    setShouldShowModal(false);
  };

  const handleShow = () => {
    setShouldShowModal(true);
  };

  return { shouldShowModal, handleClose, handleShow };
};

export default useShowModal;
