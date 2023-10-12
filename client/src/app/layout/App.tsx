import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";



function App() {
const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});
 
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className='app'>
        <CssBaseline />
        <Header/>
        <Container>
        <Catalog/>
        </Container>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
     