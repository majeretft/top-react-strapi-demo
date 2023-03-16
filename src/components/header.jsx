import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Component = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Component;
