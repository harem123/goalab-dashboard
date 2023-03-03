import {Box, Button} from "@mui/material"
import Header from "../../components/Header"
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"


const Home = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box m="20px" textAlign='center'>
            <Header title="Goalab Training" subtitle="Goalab es un sistema de entrenamiento y rehabilitacion de futbolistas que te permite mejorar tus habilidades de recepcion y disparo de balon 10 veces mas rapido que en el entrenamiento tradicional,
        esto debido a que en un entrenamiento de 15 minutos exigue mas concentracion y pone a prueba tus capacidades mas que un en un partido tradicional"/>
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
    )


}
export default Home
