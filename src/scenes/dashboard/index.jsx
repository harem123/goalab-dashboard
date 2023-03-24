import { useState, useEffect} from 'react'
import { Box, Grid,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import DetailTable from "../detailTable";

const Dashboard = (props) => {
    const theme= useTheme()
    const colors= tokens(theme.palette.mode)
    const [stats, setStats] = useState();
    const [isLoading, setIsLoading] = useState(true)
    
    const [settings, setSettings] = useState();
    
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    console.log(userId)
    console.log(token)
    const url = "http://localhost:3000/api/v1/protectedstats/"+userId
    useEffect(() => {
      fetch(url , {
        headers: {
          'Authorization': token
        }
      } )
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setSettings(data);
      });
    }, []);
    if (!settings){
      return null
    }
    

   const hits= settings.summary.fails.failPercent
    

    return ( <>
        <Box m="20px">
            
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                
                <Header title="TUS ESTADISTICAS" subtitle="las cifras mas significativas de tu avance basado en tus ultimas 30 sesiones de entrenamiento "/>
            
            
            </Box>
            </Box>
            {/* GRID CHART*/}
            <Box m="20px" mr="30px">
            <Grid container spacing={3}  >
                {/**ROW 1 */}
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title="120 pts" subtitle="Puntaje"
                                progress="0.75" increase="+14%"
                                icon={ <SportsScoreIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title="4,56 s" subtitle="Tiempo Prom"
                                progress="0.75" increase="+34%"
                                icon={ <MoreTimeIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title={`${hits} %`} subtitle="Aciertos"
                                progress= {hits} increase="+14%"
                                icon={ <CheckCircleIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}  >
                    
                    <StatBox title="64" subtitle="Fallos"
                                progress="2" increase="-14%"
                                icon={ <DangerousIcon sx={{color:colors.redAccent[400],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
               
                
            </Grid>
            </Box>
            <Box > 
            <DetailTable/>
            </Box>
       </> 
    )
}
export default Dashboard