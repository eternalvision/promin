import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function RightContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenalarm, setIsOpenalarm] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function alarmModal() {
    setIsOpenalarm(!isOpenalarm);
  }

  return (
    <li className="Right-header-content">
      <section>
        <button onClick={alarmModal}></button>
      </section>
      <section>
        <button onClick={toggleModal}>
          <span>Войти</span>
        </button>
      </section>

      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <button onClick={toggleModal}>x</button>
        login
      </Modal>
      <Modal isOpen={isOpenalarm} onRequestClose={alarmModal}>
        <button onClick={alarmModal}>x</button>
        alarm
      </Modal>
    </li>
  );
}

export default RightContent;
