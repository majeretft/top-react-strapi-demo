import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUser } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const TextStyled = styled.span`
  font-family: "Rubik Iso", cursive;
`;

const LinkStyled = styled(Nav.Link)`
  border-bottom: 3px solid transparent;
  transition: border-color 0.25s ease-in-out;

  &:hover {
    border-bottom-color: rgba(22, 25, 189, 0.5);
  }
`;

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
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
            <Form.Control type="email" placeholder="example@email.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <ButtonGroup>
        <Button variant="outline-secondary" onClick={props.onHide}>Отмена</Button>
        <Button variant="outline-primary" onClick={props.onHide}>Войти</Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

const Component = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341069.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{" "}
            <TextStyled>Tier</TextStyled>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkStyled href="#">Что мы создаем</LinkStyled>
              <LinkStyled href="#">Ресурсы</LinkStyled>
              <LinkStyled href="#">Масштабирование</LinkStyled>
              <LinkStyled href="#">Партнеры</LinkStyled>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <Button variant="outline-dark">
                  <FontAwesomeIcon icon={faCogs} />
                  Управление
                </Button>
              </Nav.Link>
              <Nav.Link href="#">
                <Button
                  variant="outline-dark"
                  onClick={() => setModalShow(true)}
                >
                  <FontAwesomeIcon icon={faUser} />
                  Войти
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Component;
