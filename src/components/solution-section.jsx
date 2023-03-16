import styled from "styled-components";

import { Container, Row, Col, Image } from "react-bootstrap";

import imgPromo from "../assets/system.png";

const SectionStyled = styled.section`
  padding: 10rem;
`;

const HeaderStyled = styled.h2`
  font-weight: 100;

  & > small {
    color: rgba(22, 25, 189, 0.75);
    font-size: 0.65em;
  }
`;

const Highlight = styled.span`
  color: rgba(22, 25, 189, 1);
  font-weight: bold;

  &::before {
    content: " ";
  }

  &::after {
    content: " ";
  }
`;

const Component = () => {
  return (
    <Container>
      <SectionStyled>
        <Row className="mb-5 align-items-center">
          <Col md="6">
            <HeaderStyled>
              <small>Оптимальное решение</small>
              <br />
              <Highlight>Вынесите за скобки</Highlight> многие рутинные задачи -
              сосредоточтесь на результате
            </HeaderStyled>
          </Col>
          <Col md="6">
            <Image
              fluid
              src={imgPromo}
            />
          </Col>
        </Row>
      </SectionStyled>
    </Container>
  );
};

export default Component;
