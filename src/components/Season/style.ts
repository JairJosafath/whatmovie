import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 550px;
  left: 0;
  padding: 20px;
  width: 90%;
  margin-top: 80px;
  margin-bottom: 60px;
  background: red;
  @media (max-width: 760px) {
    top: 500px;
    margin-top: 10px;
    padding: 15px;
  }
`;

export const Content = styled.div`
  ul {
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
  }
`;
