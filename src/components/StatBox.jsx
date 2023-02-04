import {Box, Typography, useTheme, Paper} from "@mui/material"
import {tokens} from "../theme"
import ProgressCircle from "./ProgressCircle"

const StatBox = ({title, subtitle, icon, progress, increase}) =>{
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)

    return (
        <Box width="100%" marginX="10px"  backgroundColor={colors.primary[400]} >
            <Box display="flex" justifyContent="space-between"  marginX="10px" >
                <Box >
                    {icon}
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{color: colors.grey[100]}}
                      >
                        {title}
                      </Typography>
                </Box>
                <Box mt="10px">
                    <ProgressCircle progress={progress} />
                </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" marginX="10px" mt="2px">
                <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{color: colors.greenAccent[500]}}
                      >
                        {subtitle}
                      </Typography>
                      <Typography
                      variant="h5"
                      fontWeight="italic"
                      sx={{color: colors.greenAccent[600]}}
                      >
                        {increase}
                      </Typography>

                </Box>
            
        </Box>
    )
}

export default StatBox