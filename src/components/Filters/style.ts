import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  padding: 20px;
  width: 90%;

  margin-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 40px;
  max-width: 100%;
  margin: 10px auto;
  border-radius: 4rem;
  div:first-child {
    border: none;
    padding-left: 100px;
    font-weight: bolder;
    font-size: x-large;
    padding-left: 50px;
    padding-top: 0;
    :active {
      transform: scale(1);
    }
  }

  .active {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
  background-color: ${({ theme }) => theme.background};
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
`;
export const Genre = styled.div`
  flex: 1 1 0;
  padding: 4px;
  border: solid 1px ${({ theme }) => theme.color};
  border-radius: 3rem;
  height: fit-content;
  white-space: nowrap;
  min-width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 300ms ease, color 300ms ease,
    background-color 300ms ease;
  :active {
    transform: scale(0.9);
  }
`;
