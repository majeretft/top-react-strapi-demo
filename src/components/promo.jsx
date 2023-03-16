import styled from "styled-components";

import Container from "react-bootstrap/Container";
import cloudImg from "../assets/cloud.png";

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

const Component = ({ children }) => {
  return (
    <PromoStyled>
      <Container>{children}</Container>
    </PromoStyled>
  );
};

export default Component;
