import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
import {Routes, Route} from "react-router-dom"
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import { useState } from "react";
import Sidebarmenu from "./scenes/global/Sidebar";
import Form from "./scenes/form/form"



function App() {
  
const [theme, colorMode] =useMode()
const [isSidebar, setIsSidebar] = useState(true);
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app"> 
    
    <main className="content">

      <Topbar setIsSidebar={setIsSidebar}/>
     <Routes>
      <Route path="/" element={<Contacts/>}/>
      <Route path="/form" element={<Form />} />
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
