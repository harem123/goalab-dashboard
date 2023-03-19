import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
import ResposiveBox from "./scenes/global/imageBox.jsx"
import {Routes, Route} from "react-router-dom"
import Team from "./scenes/team"
import DetailTable from "./scenes/detailTable"

import Sidebarmenu from "./scenes/global/Sidebar";
import Form from "./scenes/form/form"
import Bar from "./scenes/bar/graphBar"
import Dashboard from "./scenes/dashboard"
import Home from "./scenes/home/home.jsx"


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
      <Route path="/" element={<ResposiveBox/>}/>
      <Route path="/results" element={<Dashboard/>} />
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
