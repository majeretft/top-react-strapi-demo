import styled from "styled-components";

import Card from "react-bootstrap/Card";

const CardStyled = styled(Card)`
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  height: 100%;
  transform: translateY(${props => props.translate}px);
`;

const CardImgStyled = styled(Card.Img).attrs({
  className: `p-5`,
})``;

const Component = ({ translate = 0, title, text, imageUrl, cardButton: button }) => {
  return (
    <CardStyled translate={translate}>
      <CardImgStyled
        variant="top"
        src={imageUrl}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-fill">
          {text}
        </Card.Text>
        {button}
      </Card.Body>
    </CardStyled>
  );
};

export default Component;
