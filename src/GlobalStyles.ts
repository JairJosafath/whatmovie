import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    mode: "light",
    background: "black",
    backgroundFaded: "rgba(0,0,0,.5)",
    color: "white",
    colorFaded: "rgba(255,255,255,.5)",
  },
  dark: {
    mode: "dark",
    background: "white",
    backgroundFaded: "rgba(255,255,255,.3)",
    color: "black",
    colorFaded: "rgba(0,0,0,.2)",
  },
};

export const GLobalStyle = createGlobalStyle<{ darkmode: boolean }>`
body{
  color: ${({ darkmode }) => (!darkmode ? "white" : "black")};
  background: ${({ darkmode }) => (darkmode ? "white" : "black")};
}
`;

export const DarkmodeContext = createContext<{
  darkMode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
