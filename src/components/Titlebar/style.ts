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
  filter: ${({ solid, theme }) =>
    solid
      ? theme.mode === "dark"
        ? `drop-shadow(0 1px 6px ${theme.color})`
        : `drop-shadow(0 1px 7px rgba(130,130,130,.3))`
      : null};
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
