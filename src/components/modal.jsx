import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { userLogin, clearErrorMessage } from "../store/user";

const Component = (props) => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const errorMesssage = useSelector((state) => state.user.errorMessage);

  const handleLogin = () => {
    if (!login) {
      setLoginError("Это поле обязательно для заполнения");
    } else {
      setLoginError("");
    }

    if (!password) {
      setPasswordError("Это поле обязательно для заполнения");
    } else {
      setPasswordError("");
    }

    if (!login || !password) {
      return;
    } else {
      dispatch(userLogin({ login, password })).then((result) => {
        if (result.meta.requestStatus === "fulfilled") hideModal();
      });
    }
  };

  const hideModal = () => {
    setLogin("");
    setPassword("");
    dispatch(clearErrorMessage());
    props.onHide();
  };

  return (
    <Modal
      show={props.show}
      onHide={hideModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Введите учетные данные
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Адрес электронной почты или логин</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
            {loginError && (
              <Form.Text className="text-danger">{loginError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordError && (
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            {errorMesssage && (
              <Form.Text className="text-danger">{errorMesssage}</Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button variant="outline-secondary" onClick={hideModal}>
            Отмена
          </Button>
          <Button variant="outline-primary" onClick={handleLogin}>
            Войти
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default Component;
