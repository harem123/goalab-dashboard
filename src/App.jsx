import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
import {Routes, Route} from "react-router-dom"
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import { useState } from "react";
import Sidemenu from "./scenes/global/Sidebar";




function App() {
  
const [theme, colorMode] =useMode()
const [isSidebar, setIsSidebar] = useState(true);
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app"> 
    <Sidemenu />
    <main className="content">

      <Topbar/>
     <Routes>
      <Route path="/" element={<Contacts/>}/>
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
