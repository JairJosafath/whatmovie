import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";
import { DarkmodeContext, SearchmodeContext } from "./contexts/contexts";
import { GLobalStyle, theme } from "./GlobalStyles";
import Routes from "./routes/MyRoutes";

export default function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [searchmode, setSearchmode] = useState(false);
  console.log("searchmode", searchmode);
  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkmode }}>
      <ThemeProvider theme={!darkMode ? theme.light : theme.dark}>
        <SearchmodeContext.Provider value={{ searchmode, setSearchmode }}>
          <Router>
            <Titlebar setShowNav={setShowNav} />
            <Sidebar showNav={showNav} setShowNav={setShowNav} />
            <Routes />
          </Router>
          <GLobalStyle darkmode={darkMode} />
        </SearchmodeContext.Provider>{" "}
      </ThemeProvider>
    </DarkmodeContext.Provider>
  );
}
