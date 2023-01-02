import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 500px;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 30px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Movie = styled.div`
  cursor: pointer;
  padding: 10px;

  img {
    width: 100%;
    margin: 10px auto;
    border-radius: 1rem;
    transition: 500ms ease;
    :hover {
      border-radius: 2rem;
      object-fit: contain;
      transform: scale(1.03);
      filter: brightness(1.2);
      overflow: hidden;
    }
    :active {
      opacity: 0.9;
      transform: scale(0.97);
    }
  }
  h3 {
  }
`;
