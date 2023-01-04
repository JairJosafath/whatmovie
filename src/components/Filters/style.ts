import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 550px;
  left: 0;
  padding: 20px;
  width: 90%;
  margin-top: 80px;
  margin-bottom: 60px;
  @media (max-width: 760px) {
    top: 500px;
    margin-top: 10px;
    padding: 15px;
  }
`;

export const Content = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 40px;
  max-width: 100%;
  margin: 10px auto;
  border-radius: 4rem;
  align-items: ${({ show }) => (show ? "" : "center")};
  div:first-child {
    position: sticky;
    left: 0;
    padding: 30px;
    display: inline-block;
    border: none;
    font-weight: bolder;
    font-size: x-large;
    padding-top: 0;
    white-space: nowrap;

    background-color: ${({ theme }) => theme.background};
    :active {
      transform: scale(1);
    }
    @media (max-width: 1200px) {
      font-size: x-large;
    }
    @media (max-width: 1000px) {
      font-size: medium;
    }
    @media (max-width: 760px) {
      padding-left: 10px;
      display: none;
    }
  }

  div:last-child {
    margin-right: 80px;
  }

  mask: ${({ theme }) =>
    theme.mode === "dark"
      ? `linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 77%,
    rgba(0, 0, 0, 0) 100%
    )
  `
      : `linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 51%,
    rgba(255, 255, 255, 1) 77%,
    rgba(255, 255, 255, 0) 100%
  )
  `};
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 760px) {
    gap: 5px;
  }
`;
export const Genre = styled.div<{
  isCompany?: boolean;
  isDark?: boolean;
  isActive?: boolean;
}>`
  flex: 1 1 0;
  padding: 4px;
  border: solid 1px ${({ theme }) => theme.color};
  border-radius: 3rem;
  height: fit-content;
  white-space: nowrap;
  min-width: 200px;
  text-align: center;
  cursor: pointer;
  border: ${({ isCompany }) => (isCompany ? "none" : null)};
  transition: transform 300ms ease, color 300ms ease,
    background-color 300ms ease;
  color: ${({ theme, isActive }) => (isActive ? theme.background : null)};
  background: ${({ isDark, theme, isActive }) =>
    isDark && theme.mode === "dark" && isActive
      ? theme.colorFaded
      : isActive
      ? theme.color
      : isDark && theme.mode === "light"
      ? theme.colorFaded
      : null};

  :active {
    transform: scale(0.9);
  }
  svg {
    font-size: large;
    margin-left: 10px;
    background: ${({ theme }) => theme.background};
  }
  img {
  }
  @media (max-width: 1200px) {
    min-width: 150px;
    white-space: pre-wrap;
  }
  @media (max-width: 1000px) {
    min-width: 100px;
  }
  @media (max-width: 760px) {
    flex: 1 1 auto;
    border: none;
    padding: 3px;
    font-size: small;
    svg {
      font-size: small;
      margin-left: 10px;
    }
  }
`;

export const Menu = styled.div<{ show: boolean }>`
  height: ${({ show }) => (show ? "150px" : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: height ${({ show }) => (show ? "300ms" : "600ms")} ease,
    opacity ${({ show }) => (show ? "600ms" : "300ms")} ease;
  overflow-y: ${({ show }) => (show ? "" : "hidden")};

  ul {
    list-style: none;
    display: grid;
    justify-items: center;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  li {
    font-size: large;
    padding: 15px;
    border-radius: 2rem;
    transition: 500ms ease;
    :hover {
      background: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.background};
    }
  }
`;
