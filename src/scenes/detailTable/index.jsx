import { Box , Button} from "@mui/material"
import { DataGrid,GridToolbar } from "@mui/x-data-grid"
import {tokens} from "../../theme"
import {mockDataStats} from "../../data/mockData"
import { useTheme} from "@mui/material"
import Header from "../../components/Header.jsx"



const DetailTable = () =>{

  

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      {field: "date", headerName:"fecha", 
      flex:1, 
      cellClassName: "name-column--cell"},

    {field: "score", headerName:"Puntaje", type:"number",
    flex:1, 
    cellClassName: "name-column--cell"},

    {field: "hits", headerName:"Aciertos", type:"number",
    flex:1,cellClassName: "name-column--cell" },

    {field: "fails", headerName:"Fallados", type:"number",
    headerAlign:"left",
    align:"center",
    flex:1, 
    },
    
    
    

]

    return (
        <Box m="20px" mt="30px">
            <Header title="ENTRENAMIENTOS" subtitle="Historico de resultados de tus entrenamientos"/>
            
            <Box m="40px 0 0 0" height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.grey[100]} !important`,
                },
                

              }}
            >
                <DataGrid 
                rows= {mockDataStats}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default DetailTable;