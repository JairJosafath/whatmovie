import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    mode: "light",
    background: "black",
    color: "white",
  },
  dark: {
    mode: "dark",
    background: "white",
    color: "black",
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
