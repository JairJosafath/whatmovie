import styled from "styled-components";

export const List = styled.ul<{ showMenu: boolean }>`
  position: relative;
  top: 95%;
  display: block;
  visibility: "${({ showMenu }) => (showMenu ? "show" : "hidden")}";
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
  transition: visibility 300ms, opacity 200ms;
  li {
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

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: -20px;

  /* background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cyanocitta_cristata_FWS_%28uncropped%29.jpg/310px-Cyanocitta_cristata_FWS_%28uncropped%29.jpg"); */
`;

export const Content = styled.div`
  position: relative;
  height: auto;
  .grad-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    max-height: 700px;

    background-image: ${({ theme }) =>
      theme.mode === "light"
        ? `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6124824929971988) 27%, rgba(245,245,245,0) 100%)`
        : ` linear-gradient(0deg, rgba(245,245,245,1) 0%, rgba(245,245,245,0.3) 27%, rgba(245,245,245,0) 100%)`};
    @media (max-width: 1200px) {
      height: 680px;
    }

    @media (max-width: 760px) {
      height: 600px;
    }
  }
  @media (max-width: 1200px) {
    height: 680px;
    width: 100%;
  }

  @media (max-width: 760px) {
    height: 600px;
    width: 100%;
  }
`;

export const Info = styled.div<{ showMenu?: boolean }>`
  width: 70%;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: absolute;
  bottom: 15px;
  left: 10px;
  padding: 7px;
  cursor: default;
  button {
    min-width: 120px;
    max-width: 130px;
    min-height: 50px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: 2px solid ${({ theme }) => theme.color};
    border-radius: 3rem;
    white-space: nowrap;
    cursor: pointer;
    transition: transform 150ms ease;
    :hover {
      font-weight: bold;
    }
    :active {
      transform: scale(0.9);
    }
  }
  p {
    line-height: 40px;
    letter-spacing: 2px;
  }
  @media (max-width: 1100px) {
    p {
      line-height: 23px;
      letter-spacing: 1px;
      font-size: small;
    }
    button {
      width: 90px;
      max-width: 100px;
    }
  }
  @media (min-width: 1200px) {
    button {
      width: 90px;
      z-index: 10;
    }
  }
`;

export const Title = styled.h3``;

export const Carousel = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
  justify-content: center;
  gap: 30px;
  :hover {
    filter: blur(0);
  }
  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.color};
    cursor: pointer;
    border: 2px solid;
    filter: opacity(0.3);
  }
  .loader {
    position: absolute;
    max-width: 300px;
    height: 4px;
    bottom: 35px;
    background-color: ${({ theme }) => theme.color};
    border-radius: 1rem;
    filter: opacity(0.5);
  }
  .animate {
    animation: grow 15s infinite reverse ease-in-out;
  }

  .active {
    animation: pulse 1.5s infinite ease alternate;
  }

  @keyframes grow {
    0% {
      width: 0;
    }
    100% {
      width: 300px;
    }
  }
  @media (max-width: 700px) {
    @keyframes grow {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  }
  @keyframes pulse {
    0% {
      background-color: ${({ theme }) => theme.color};
      border-color: ${({ theme }) => theme.background};
    }
    50% {
      filter: blur(1px);
    }
    100% {
      background-color: ${({ theme }) => theme.background};
      border-color: ${({ theme }) => theme.color};
    }
  }
  @media (max-width: 700px) {
    justify-content: center;
    right: 30px;
    width: 60%;
    margin-bottom: 30px;
  }
`;

export const Image = styled.picture`
  img {
    width: 100%;
    height: auto;
    max-height: 700px;
    object-fit: cover;
    object-position: 50% 30%;
    @media (max-width: 1190px) {
      object-position: 50% 50%;
      height: 100%;
    }
  }
`;
