import styled from "styled-components";
import { backdrop_size, img_base_url } from "../../api/api";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

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
        ? `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6124824929971988) 27%, rgba(255,255,255,0) 100%)`
        : ` linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 27%, rgba(255,255,255,0) 100%)`};
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

export const Info = styled.div`
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
    width: 120px;
    height: 50px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: 2px solid ${({ theme }) => theme.color};
    border-radius: 3rem;
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
      height: 40px;
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

export const Image = styled.picture<{
  backdrop_path: string;
}>`
  img {
    width: 100%;
    height: auto;
    max-height: 700px;
    object-fit: cover;
    object-position: 0 0;
    @media (max-width: 1190px) {
      object-position: 50% 50%;
      height: 100%;
    }
  }
`;
