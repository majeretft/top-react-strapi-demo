import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUser, faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import ModalComponent from "./modal";
import { logout } from "../store/user";

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

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const isLogged = userData != null;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              <LinkStyled href="#section-0">Что мы создаем</LinkStyled>
              <LinkStyled href="#section-1">Ресурсы</LinkStyled>
              <LinkStyled href="#section-2">Масштабирование</LinkStyled>
            </Nav>
            <Nav>
              {isLogged && (
                <>
                  <Nav.Link href="#">
                    <Button variant="outline-dark">
                      <FontAwesomeIcon icon={faCogs} />
                      Управление
                    </Button>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Button variant="outline-dark" onClick={logoutHandler}>
                      <FontAwesomeIcon icon={faClose} />
                      Выход
                    </Button>
                  </Nav.Link>
                </>
              )}

              {!isLogged && (
                <Nav.Link href="#">
                  <Button
                    variant="outline-dark"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    Войти
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Component;
