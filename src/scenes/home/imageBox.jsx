import { Box, Typography,Button } from "@mui/material"
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
      <Typography variant="h3" color={colors.greenAccent[400]} sx={{ m: "0 0 5px 0" }}>
      Goalab es un sistema de entrenamiento y rehabilitación de futbolistas que te permite mejorar tus habilidades de recepción y disparo de balón 10 veces más rápido que en el entrenamiento tradicional, esto es debido a que en un entrenamiento de 15 minutos exige más concentración y pone a prueba tus capacidades más que en un partido habitual. 
          </Typography>
          <Typography variant="h3" color={colors.greenAccent[400]}>
          Disfruta tu entrenamiento del más alto nivel con goalab
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