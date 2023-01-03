import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";
import { DarkmodeContext, GLobalStyle, theme } from "./GlobalStyles";
import Routes from "./routes/MyRoutes";

export default function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkmode }}>
      <ThemeProvider theme={!darkMode ? theme.light : theme.dark}>
        <Router>
          <Titlebar setShowNav={setShowNav} />
          <Sidebar showNav={showNav} setShowNav={setShowNav} />
          <Routes />
        </Router>
        <GLobalStyle darkmode={darkMode} />
      </ThemeProvider>
    </DarkmodeContext.Provider>
  );
}
