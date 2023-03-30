import styled from "styled-components";

const HeaderStyled = styled.header`
  ${(props) => {
    if (props.isFullHeight) return `height: 100vh;`;
  }}
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Component = ({ children, isFullHeight = true }) => {
  return <HeaderStyled isFullHeight={isFullHeight}>{children}</HeaderStyled>;
};

export default Component;
