import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
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
const [stats, setStats] = useState();
const [isLoading, setIsLoading] = useState(true)

const [settings, setSettings] = useState();

useEffect(() => {
  fetch("https://backend-gl.up.railway.app/api/v1/stats/1")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      setSettings(data);
  });
}, []);
if (!settings){
  return null
}
console.log(settings)
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app"> 
    
    <main className="content">

      <Topbar setIsSidebar={setIsSidebar}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/results" element={<Dashboard settings={settings}/>} />
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
