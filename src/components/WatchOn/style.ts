import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 550px;
  height: 300px;
  width: 100%;
  padding: 20px 0;
`;

export const Content = styled.div`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 760px) {
    font-size: small;
  }
`;
