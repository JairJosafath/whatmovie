import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 580px;
  left: 0;
  padding: 20px 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  margin-bottom: 60px;
  @media (max-width: 760px) {
    top: 500px;
    margin-top: 10px;
  }
  @media (min-width: 1200px) {
    top: 590px;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  ul {
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    list-style: none;
    gap: 30px;
    white-space: nowrap;

    li {
      display: grid;
      text-align: center;
      cursor: pointer;
      :hover {
        filter: brightness(1.2);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  img {
    margin: 0 auto;
  }
`;
