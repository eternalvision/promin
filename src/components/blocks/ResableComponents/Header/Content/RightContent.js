import React, { useState } from "react";
import Modal from "react-modal";
import DarkMode from "./DarkMode";

Modal.setAppElement("#root");

function RightContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenalarm, setIsOpenalarm] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [name, setName] = useState("");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function alarmModal() {
    setIsOpenalarm(!isOpenalarm);
  }

  function RegistrationInputContent() {
    console.log(`password: ${password}, emal: ${email}, name: ${name}`);
  }

  function loginInputContent() {
    console.log(`password: ${inputPassword}, emal: ${inputEmail}`);
  }

  return (
    <li className="Right-header-content">
      <section>
        <DarkMode />
      </section>
      <section>
        <button onClick={alarmModal}></button>
      </section>
      <section>
        <button onClick={toggleModal}>
          <span>Увійти</span>
        </button>
      </section>

      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <button onClick={toggleModal}>x</button>
        <div className="Auth-forms">
          <section className="Registration-form">
            <p>Реєстрація</p>
            <form method="POST">
              <label>
                <span>Нікнейм</span>
                <input
                  value={name}
                  type="text"
                  name="name"
                  placeholder="Нікнейм"
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label>
                <span>Пошта</span>
                <input
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Пошта"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                <span>Пароль</span>
                <input
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button className="Reg-btn" type="submit" onClick={RegistrationInputContent}>
                Зареєструватись
              </button>
            </form>
          </section>
          <section className="Login-form">
            <p>Вхід</p>
            <form method="POST">
              <label>
                <span>Пошта</span>
                <input
                  value={inputEmail}
                  type="email"
                  name="email"
                  placeholder="Пошта"
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </label>
              <label>
                <span>Пароль</span>
                <input
                  value={inputPassword}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={(event) => setinputPassword(event.target.value)}
                />
              </label>
              <button className="Login-btn" type="submit" onClick={loginInputContent}>
                Увійти
              </button>
            </form>
          </section>
        </div>
      </Modal>
      <Modal isOpen={isOpenalarm} onRequestClose={alarmModal}>
        <button onClick={alarmModal}>x</button>
        alarm
      </Modal>
    </li>
  );
}

export default RightContent;
