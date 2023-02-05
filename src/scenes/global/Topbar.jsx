import {Box, IconButton, useTheme, Button} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SummarizeIcon from '@mui/icons-material/Summarize';

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
        
        <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
            sx={{
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <HomeOutlinedIcon />
            HOME
            
          </Button>
          </Link>
          <Box
        display="flex"
        
      >
        <Link to="/results" style={{ textDecoration: 'none' }}>
        <Button
            sx={{
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <SummarizeIcon sx={{ mr: "2px" }} />
            RESULTADOS 
            
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