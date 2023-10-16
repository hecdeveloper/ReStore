import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='app'>
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Outlet />
          </Container>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
