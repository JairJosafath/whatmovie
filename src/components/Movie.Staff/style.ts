import styled from "styled-components";

export const Wrapper = styled.div<{ searchmode: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.background};
  top: ${({ searchmode }) => (!searchmode ? "560px" : "0")};
  h2 {
    margin-left: 60px;
  }

  @media (max-width: 760px) {
    top: 485px;
  }
  @media (min-width: 1200px) {
    top: 584px;
  }
`;

export const Content = styled.div`
  p {
    margin: 0;
  }
  h2 {
    margin-left: 60px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    max-width: 100%;
    overflow-x: scroll;
    grid-gap: 20px;
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) =>
        theme.mode !== "dark" ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) =>
        theme.mode !== "dark" ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
    }
    ::-webkit-scrollbar-thumb:active {
      background: ${({ theme }) =>
        theme.mode !== "dark" ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
    }
  }
  img {
    border-radius: 1rem;
    :hover {
      border-radius: 1.3rem;
      filter: brightness(1.05);
    }
  }

  .other-cast {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    font-size: small;
  }
`;
