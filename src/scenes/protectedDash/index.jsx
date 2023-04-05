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


const DashProtected = (props) => {
    const theme= useTheme()
    const colors= tokens(theme.palette.mode)
    const [stats, setStats] = useState();
    const [isLoading, setIsLoading] = useState(true)
    
    const [info, setInfo] = useState();
    
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    console.log(userId)
    console.log(token)
    const liveUrl = "https://backend-gl.up.railway.app/api/v1/protectedstats/"+userId
    const testUrl = "http://localhost:3000/api/v1/protectedstats/"+userId
    
    useEffect(() => {
      fetch(liveUrl , {
        headers: {
          'Authorization': token
        }
      } )
      .then(response => {
        if (response.status === 403) {
          alert("Error: Token no valido.");
        } else {
          return response.json();
        }
      })
      .then(data => {
          
          setInfo(data);
      });
    }, []);

    if (!info){
      return <Box m="20px">
            
      <Box display="flex" justifyContent="space-between" alignItems="center" >
          
          <Header title="TUS ESTADISTICAS" subtitle="las cifras mas significativas de tu avance basado en tus sesiones de entrenamiento "/>
      </Box>
      </Box>
    }

    return ( <>
        <Box m="20px">
            
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                
                <Header title="TUS ESTADISTICAS" subtitle="las cifras mas significativas de tu avance basado en tus sesiones de entrenamiento "/>
                      
            </Box>
            
            </Box>
            {/* GRID CHART*/}
            <Box m="20px" mr="30px">
            <Grid container spacing={3}  >
                {/**ROW 1 */}
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title= {`${info.summary2.score.totScore} pts`} subtitle="Puntaje"
                                progress={info.summary2.score.progress} increase={`${info.summary2.score.progress*100}%`}
                                icon={ <SportsScoreIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title={`${info.summary2.time.timeAvr} s`} subtitle="Tiempo Prom"
                                progress={info.summary2.time.progress} increase={`${info.summary2.time.progress *100}%`}
                                icon={ <MoreTimeIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    
                    <StatBox title={`${info.summary2.hits.hitPercent} %`} subtitle="Aciertos"
                                progress= {info.summary2.hits.progress} increase= {`${info.summary2.hits.progress *100} %`} 
                                icon={ <CheckCircleIcon sx={{color:colors.greenAccent[600],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
                <Grid item xs={6} md={3} lg={3}  >
                    
                    <StatBox title= {`${info.summary2.fails.failPercent} %`} subtitle="Fallos"
                                progress={info.summary2.fails.progress}  increase= {`${info.summary2.fails.progress *100} %`} 
                                icon={ <DangerousIcon sx={{color:colors.redAccent[400],
                                fontSize:"30px"  }}
                                />}
                                />
                </Grid>
               
                
            </Grid>
            </Box>
            <Box > 
            <DetailTable info={info}/>
            </Box>
       </> 
    )
}
export default DashProtected