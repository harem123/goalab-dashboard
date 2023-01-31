import {Box, IconButton, useTheme, Button} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {Link} from "react-router-dom"

const Topbar =()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      
      <Box
        display="flex"
        
      >
        <Link to="/">
        <Button
            sx={{
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <HomeOutlinedIcon />
            Dashboard
            
          </Button>
          </Link>
          <Box
        display="flex"
        
      >
        <Link to="/form">
        <Button
            sx={{
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <PersonOutlinedIcon sx={{ mr: "2px" }} />
            Registration
            
          </Button>
          </Link>
      </Box>
      </Box>
      

    
          {/* ICONS */}
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      );
    };


export default Topbar