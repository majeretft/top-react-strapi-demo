import styled from "styled-components";

import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const SectionStyled = styled.section`
  padding: 10rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.25rem;
  font-style: italic;
`;

const HeaderStyled = styled.h1`
  font-weight: 100;
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
        <Row className="mb-5">
          <Col md="5">
            <HeaderStyled>
              <Highlight>Платформа</Highlight> для бизнес-решений
            </HeaderStyled>
          </Col>
          <Col md="7">
            <StyledParagraph>
              Мы создаем наиболее эффективную
              <Highlight>систему для автоматизации</Highlight>и сопросождения
              вашего бизнеса. Система облачных вычислений совместно с ии для
              <Highlight>
                ускорения принятия верных и своевременных решений
              </Highlight>
            </StyledParagraph>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
          <ButtonGroup>
            <Button variant="outline-primary" size="lg">
              Введение в концепцию
            </Button>
            <Button variant="outline-primary" size="lg">
              Документация и API
            </Button>
          </ButtonGroup>
        </div>
      </SectionStyled>
    </Container>
  );
};

export default Component;
