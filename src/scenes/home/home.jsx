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
            <Header title="Goalab Training" subtitle="Mejora tu tecnica de juego 10 veces mas rapido"/>
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