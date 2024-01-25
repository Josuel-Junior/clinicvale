import { ThemeProvider } from "@mui/material";
import { Theme } from "./shared/theme/Theme";
import { Outlet } from "react-router-dom";
import { NavBar } from "./shared/components/navbar/NavBar";


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <NavBar/>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
