import styled from "styled-components";

export const Wrapper = styled.div`
  position: static;
  margin-top: 50px;
`;

export const Content = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  svg {
    flex: 1;
    height: 80%;
    cursor: pointer;
    :active {
      opacity: 0.7;
    }
  }
`;

export const TopBar = styled.div`
  flex: 3;
  padding-left: 30%;
  font-size: x-large;
  font-weight: bold;
`;
