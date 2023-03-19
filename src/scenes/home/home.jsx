import {Box, Button,Typography} from "@mui/material"
import Header from "../../components/Header"
import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import goalImg from '../../static/images/home/Goalweb520.jpg'
import goalsmall from '../../static/images/home/goalsmall.jpeg'
import useMediaQuery from '@mui/material/useMediaQuery';
import ResposiveBox from '../global/imageBox.jsx'

const Home = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const isXsScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ display: 'flex',justifyContent: 'center',flexDirection: isXsScreen ? 'column' : 'row' ,margin: '0 auto' , marginTop: '40px'}}>
        <Box sx={{ marginRight: '16px',justifyContent: 'center' }} >
        <img src={isXsScreen ? goalsmall : goalImg} alt="goalab image" />
        </Box>
        <Box textAlign='center' >
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
          <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '600px', margin: '0 auto'  }} >
          <Typography variant="h3" color={colors.greenAccent[400]}>
          Goalab es un sistema del más alto nivel tecnológico de entretenimiento y rehabilitación de futbolistas que permite perfeccionar tus habilidades en la recepción y disparo del balón muchas veces más rápido y preciso optimizando la concentración y reflejos para jugar.
          </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '600px', margin: '0 auto'  }} >
            <Typography variant="h3" color={colors.greenAccent[400]}>
            Con Goalab desarrollas capacidades y tecnica mayores a las exigidas para cualquier encuentro deportivo.
          </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '600px', margin: '0 auto', marginBottom:"30px" }} >
            <Typography variant="h3" color={colors.greenAccent[400]}>
            Disfruta tu entrenamiento del más alto nivel con Goalab.
          </Typography>
            </Box>
            <Box >
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
    )


}
export default Home
