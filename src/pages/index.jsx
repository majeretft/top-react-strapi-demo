import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import CardComponent from "../components/card";
import MenuComponent from "../components/menu";
import cloudImg from "../assets/cloud.png";

const HeaderStyled = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const PromoStyled = styled.div.attrs({
  className: `flex-fill d-flex align-items-center`,
})`
  &::before {
    content: " ";
    background-color: rgba(22, 25, 189, 0.75);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
  }

  &::after {
    content: " ";
    background-image: url(${cloudImg});
    background-repeat: repeat;
    background-position: center;
    background-size: 25%;
    opacity: 0.25;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Page = () => {
  return (
    <>
      <HeaderStyled>
        <MenuComponent />

        <PromoStyled>
          <Container>
            <Row>
              <Col md="3">
                <CardComponent
                  text={`Новый подход к реализации задач, оптимизация времени
                      выполнения`}
                  title={`Архитектурные решения`}
                  cardButton={
                    <Button variant="warning">Подписаться на новости</Button>
                  }
                  imageUrl={`https://cdn-icons-png.flaticon.com/512/9215/9215454.png`}
                  translate={-100}
                />
              </Col>
              <Col md="6" className="d-flex justify-content-center">
                <Image
                  fluid
                  src="https://cdn-icons-png.flaticon.com/512/9995/9995237.png"
                ></Image>
              </Col>
              <Col md="3">
                <CardComponent
                  text={`Продвинутая среда исполнения для настройки гибких
                  процессов`}
                  title={`Автоматизация процессов`}
                  cardButton={
                    <Button variant="warning">Подписаться на новости</Button>
                  }
                  imageUrl={`https://cdn-icons-png.flaticon.com/512/9215/9215459.png`}
                  translate={100}
                />
              </Col>
            </Row>
          </Container>
        </PromoStyled>
      </HeaderStyled>
    </>
  );
};

export default Page;
