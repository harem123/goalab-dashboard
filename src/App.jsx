import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
import ResposiveBox from "./scenes/home/imageBox"

import Login from "./scenes/home/Login"
import {Routes, Route} from "react-router-dom"

import Dashboard from "./scenes/dashboard"



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
      <Route path="/login" element={<Login/>} />
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
