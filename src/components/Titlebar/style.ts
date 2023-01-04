import styled from "styled-components";

export const Wrapper = styled.div<{ solid: boolean; search: boolean }>`
  position: sticky;
  color: ${({ theme }) => theme.color};
  height: 53px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 20px;
  transition: background-color
      ${({ search, solid }) => (!search && !solid ? "1s" : "300ms")} ease,
    color 300ms ease;
  backdrop-filter: blur(1.5rem) opacity(0.83)
    ${({ theme }) =>
      theme.mode === "dark" ? "brightness(2.5)" : "brightness(0.7)"};
  background: ${({ solid, theme }) => (solid ? theme.background : null)};
  background: ${({ search, theme }) => (search ? theme.background : null)};
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
  :hover {
    background: ${({ theme, search, solid }) =>
      solid
        ? null
        : search
        ? theme.background
        : theme.mode === "light"
        ? `linear-gradient(90deg,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0.1881127450980392) 30%,rgba(0, 0, 0, 0) 51%,rgba(0, 0, 0, 0.36458333333333337) 71%,rgba(0, 0, 0, 1) 100%)`
        : `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1881127450980392) 30%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.36458333333333337) 71%, rgba(255,255,255,1) 100%)`};
  }
  @media (max-width: 760px) {
    height: 27px;
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;

  @media (max-width: 760px) {
    gap: 10px;
  }
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
  white-space: nowrap;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
  @media (max-width: 760px) {
    font-size: x-large;
    flex: 1;
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
  height: ${({ search }) => (search ? "100%" : 0)};
  transition: height 500ms ease, background-color 300ms ease, color 300ms ease;
  background: ${({ theme, search }) => (search ? theme.background : null)};
  backdrop-filter: ${({ search }) =>
    !search ? "blur(1.5rem) opacity(0.4)" : null};
  margin-top: 10px;

  input {
    height: ${({ search }) => (search ? "70%" : 0)};
    opacity: ${({ search }) => (search ? 1 : 0)};
    width: 80%;
    margin: 0 auto;
    padding: 0;
    border-color: black;
    text-align: center;
    font-size: large;
    transition: height 100ms ease, opacity 300ms ease, border-width 300ms ease;
    border-radius: 3rem;
    margin-bottom: 30px;
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
