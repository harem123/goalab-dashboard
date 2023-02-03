import {Box} from "@mui/material"
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"

const Bar = () =>{

    return (
        <Box m="20px">
            <Header title="Historico Resultados" subtitle="en la tabla se muestra tus ultimos 7 resultados por color"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    )


}
export default Bar