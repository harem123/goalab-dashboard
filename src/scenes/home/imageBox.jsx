import { Box, Grid, Typography,Button } from "@mui/material"
import goalImg from '../../static/images/home/Goalweb520.jpg'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import { useContext , useState, useEffect} from 'react'
import {Link} from "react-router-dom"

function ResponsiveBox() {
  const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      gap: 4,
      marginTop: '40px',
      marginLeft: '20px',
      marginRight:'20px',
      marginBottom:'20px'
    }}>
      <Box sx={{ flex: 1 }}>
        <img src={goalImg} alt="Goalab Image" style={{ width: '100%' }} />
      </Box>
      <Box sx={{ flex: 1 }}>
      <Typography
        variant="h1"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Goalab Training
      </Typography>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Mejora tu tecnica de juego 10 veces mas rapido 
      </Typography>
      <Typography variant="h3" color={colors.greenAccent[400]}>
          Goalab es un sistema del más alto nivel tecnológico de entretenimiento y rehabilitación de futbolistas que permite perfeccionar tus habilidades en la recepción y disparo del balón muchas veces más rápido y preciso optimizando la concentración y reflejos para jugar.
          </Typography>
          <Box sx={{ m: "20px 0 0 0" }} >
            <Link to="/results" style={{ textDecoration: 'none' }}>
            <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Conoce Mas
          </Button>
          </Link>
          </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveBox;