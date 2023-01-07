import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    mode: "light",
    background: "black",
    backgroundFaded: "rgba(0,0,0,.5)",
    color: "#F5F5F5",
    colorFaded: "rgba(255,255,255,.5)",
  },
  dark: {
    mode: "dark",
    background: "#F5F5F5",
    backgroundFaded: "rgba(255,255,255,.3)",
    color: "black",
    colorFaded: "rgba(0,0,0,.2)",
  },
};

export const GLobalStyle = createGlobalStyle<{ darkmode: boolean }>`
body{
  color: ${({ darkmode }) => (!darkmode ? "#F5F5F5" : "black")};
  background: ${({ darkmode }) => (darkmode ? "#F5F5F5" : "black")};
    

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: ${({ darkmode }) =>
      !darkmode ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
  }
  ::-webkit-scrollbar-thumb:hover{
  	background: ${({ darkmode }) =>
      !darkmode ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
  }
  ::-webkit-scrollbar-thumb:active{
  	background: ${({ darkmode }) =>
      !darkmode ? "rgba(200,200,200,.3)" : "rgba(20,20,20,.3)"};
  }
}
`;

export const DarkmodeContext = createContext<{
  darkMode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
