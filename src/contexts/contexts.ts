import { createContext } from "react";

export const DarkmodeContext = createContext<{
  darkMode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const SearchmodeContext = createContext<
  | {
      searchmode: boolean;
      setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);
