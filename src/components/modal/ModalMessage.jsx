import React, { useState, useEffect } from "react";
import ModalComponent from "./ModalComponent";

const ModalApp = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    let message = "You Lost!";
    showModal(message);
  }, []);

  const showModal = (message) => {
    setModalMessage(message);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  return (
    <div className="ModalApp">
      <ModalComponent
        show={modalShow}
        handleClose={handleClose}
        message={modalMessage}
      />
    </div>
  );
};

export default ModalApp;
