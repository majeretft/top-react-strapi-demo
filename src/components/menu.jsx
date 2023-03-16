import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUser } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import ModalComponent from "./modal";

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
