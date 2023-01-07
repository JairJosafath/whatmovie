import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Results = styled.div<{ showResults: boolean; search: boolean }>``;

export const List = styled.div<{ showMenu: boolean; search: boolean }>`
  position: absolute;
  top: ${({ showMenu }) => (showMenu ? "150%" : "-200%")};
  display: block;
  visibility: "${({ showMenu }) => (showMenu ? "show" : "hidden")}";
  display: "${({ search }) => (search ? null : "none")}";
  height: "${({ showMenu }) => (showMenu ? null : 0)}";
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  position: absolute;
  border-radius: 0.5rem;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.background : "rgb(30,30,30)"};
  width: 150px;
  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? `0px 8px 16px 0px ${theme.colorFaded}`
      : `0px 0 0 0px ${theme.colorFaded}`};
  padding: 12px 0;
  z-index: 1;
  list-style: none;
  text-align: center;
  transition: visibility 300ms, opacity 200ms, top 0s;
  .item {
    padding: 10px 20px;
    cursor: pointer;
    transition: opacity 300ms;
    :hover {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.background};
    }
    :active {
      opacity: 0.7;
    }
  }
  li:nth-child(2n) {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(180,180,180)" : "rgb(20,20,20)"};
    :hover {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.background};
    }
  }
`;
export const Search = styled.div<{ search: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 70% 10%;
  grid-template-rows: 1;
  height: ${({ search }) => (search ? "100%" : 0)};
  transition: height 500ms ease, background-color 300ms ease, color 300ms ease;
  background: ${({ theme, search }) => (search ? theme.background : null)};
  backdrop-filter: ${({ search }) =>
    !search ? "blur(1.5rem) opacity(0.4)" : null};
  margin-top: 10px;
  justify-items: center;
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
    visibility: ${({ search }) => (search ? "" : "hidden")};
    margin: auto 0;
    margin-bottom: 20px;
    font-size: x-large;
    transition: opacity 300ms ease;
  }
  .type {
    opacity: ${({ search }) => (search ? 1 : 0)};
    visibility: ${({ search }) => (search ? null : "hidden")};
    height: ${({ search }) => (search ? "90%" : 0)};
    width: 100%;
    transition: 500ms;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: large;
    cursor: pointer;
  }
`;
