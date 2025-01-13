import { ThemeProvider } from "@mui/material";
import { Theme } from "./shared/theme/Theme";
import { Outlet } from "react-router-dom";
import { NavBar } from "./shared/components/navbar/NavBar";
import { Navbar } from "./shared/components/footer/Footer";
import { ReturnToTop } from "./shared/components/returnToTop/ReturnToTop";


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <NavBar/>
      <Outlet />
      <ReturnToTop />
      <Navbar/>
    </ThemeProvider>
  )
}

export default App
