import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.color};
  height: 53px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 20px;
  transition: background-color 300ms ease, color 300ms ease;
  backdrop-filter: blur(40px) opacity(0.7)
    ${({ theme }) =>
      theme.mode === "dark" ? "brightness(2.5)" : "brightness(0.7)"};
  svg {
    font-size: large;
    cursor: pointer;
    transition: filter 600ms ease-out;
    :hover {
      transform: scale(1.1);
    }
    :active {
      opacity: 0.5;
    }
  }
  @media (max-width: 760px) {
    height: 35px;
    padding-top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  gap: 30px;
  svg {
    flex: 1;
    font-size: x-large;
    @media (max-width: 760px) {
      flex: 12;
    }
  }
  span {
    font-size: large;
    cursor: pointer;
    transition: transform 300ms;
    :hover {
      transform: scale(1.1);
    }
    @media (max-width: 760px) {
      display: none;
    }
  }
  div {
    display: flex;
    flex: 3;
    justify-content: start;
    gap: 30px;
  }
`;
export const Title = styled.span`
  flex: 3;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
  transition: transform 300ms;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 760px) {
    font-size: x-large;
  }
`;
export const Right = styled.div<{ search: boolean }>`
  flex: 2;
  display: flex;
  justify-content: end;
  gap: 30px;

  :last-child {
    margin-right: 30px;
  }
  svg:first-child {
    font-size: larger;
    transform: ${({ search }) => (search ? "scale(1.5)" : "")};
    transition: transform 300ms ease;
  }
`;
export const Search = styled.div<{ search: boolean }>`
  display: grid;
  height: ${({ search }) => (search ? "60px" : 0)};
  align-items: center;
  transition: height 300ms ease, background-color 300ms ease, color 300ms ease;
  backdrop-filter: brightness(0.1);
  /* border: 3px solid red; */
  input {
    height: ${({ search }) => (search ? "60%" : 0)};
    opacity: ${({ search }) => (search ? 1 : 0)};
    width: 80%;
    margin: 0 auto;
    padding: 0;
    border: none;
    text-align: center;
    font-size: large;
    transition: height 300ms ease, opacity 300ms ease, border-width 300ms ease;
    border-radius: 3rem;
    :hover {
      border-width: 2px;
    }
    :focus {
      outline: none;
      border-width: 2px;
    }
  }

  svg {
    opacity: ${({ search }) => (search ? 1 : 0)};
    position: absolute;
    right: 20px;
    font-size: x-large;
    transition: opacity 300ms ease;
  }
`;
