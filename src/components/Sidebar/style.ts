import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
`;

export const Bar = styled.div<{ showNav: boolean }>`
  flex: ${({ showNav }) => (showNav ? 2 : 0)};
  opacity: ${({ showNav }) => (showNav ? 1 : 0)};
  width: ${({ showNav }) => (showNav ? "400px" : 0)};
  height: 100%;
  background: ${({ theme }) => theme.background};
  transition: flex 600ms ease, opacity 300ms ease;
  filter: drop-shadow(
    ${({ theme }) =>
      theme.mode === "dark" ? `.1rem 0 10px ${theme.color}` : null}
  );
  ul {
    opacity: ${({ showNav }) => (showNav ? 1 : 0)};
    transition: opacity 100ms ease;
    list-style: none;
    padding: 30px;
    border-bottom: 1px solid;
    margin: 0;
    border-image: ${({ theme }) =>
      `linear-gradient(90deg,${theme.backgroundFaded} 10%, ${theme.colorFaded} 50%,${theme.backgroundFaded} 100%) 18`};
  }

  li {
    width: 80%;
    font-size: x-large;
    transition: background-color 500ms ease, text-align 1s ease,
      border-radius 500ms ease;

    :hover {
      background: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.background};
      cursor: pointer;
      border-radius: 3rem;
    }
    :active {
      filter: opacity(0.9);
      transform: scaleX(1.05);
    }
  }
  p {
    margin: 18px;
    padding: 5px;
    opacity: ${({ showNav }) => (showNav ? 1 : 0)};
    font-size: ${({ showNav }) => (!showNav ? "1px" : null)};
    transition: 300ms ease, font-size 0s;
    :hover {
      padding-left: 20px;
      border: none;
    }
  }
  @media (max-width: 600px) {
    flex: ${({ showNav }) => (showNav ? 8 : 0)};
    p {
      font-size: large;
      border-bottom: 1px solid ${({ theme }) => theme.colorFaded};
      width: 100%;
    }
  }
`;

export const Dimmed = styled.div<{ showNav: boolean; delayed: boolean }>`
  width: 100%;
  flex: ${({ showNav }) => (showNav ? 5 : 12)};
  backdrop-filter: ${({ showNav, theme }) =>
    showNav
      ? "blur(2px) brightness(.5)"
      : "blur(0) brightness(.8)"
      ? theme.mode === "light"
        ? " blur(2px) brightness(.5)"
        : "blur(2px) brightness(.8)"
      : null};
  opacity: ${({ showNav }) => (showNav ? 1 : 0)};
  transition: opacity 300ms ease;
  :hover {
    cursor: pointer;
    /* backdrop-filter: blur(15px)
      ${({ theme }) =>
      theme.mode === "light" ? "brightness(.5)" : "brightness(.8)"}; */
  }
`;
