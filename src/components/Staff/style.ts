import styled from "styled-components";

export const Wrapper = styled.div``;

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
