import { Box, Typography, useTheme} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import {tokens} from "../../theme"
import {mockDataTeam} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header.jsx"



const Team = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
    {field: "id", headerName:"ID",flex:1},

    {field: "name", headerName:"Nombre", 
    flex:1, 
    cellClassName: "name-column--cell"},

    {field: "age", headerName:"Edad", type:"number",
    headerAlign:"left",
    align:"left",
    flex:1, 
    cellClassName: "name-column--cell"},
    {field: "phone", headerName:"Telefono", 
    flex:1, },
    {field: "email", headerName:"Email", 
    flex:1, },
    {
        field: "access", headerName:"Acceso",
        flex: 1,
        renderCell:({row:{access}})=>{
            return (
                <Box
                    width= "60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access === "admin" 
                        ? colors.greenAccent[600]
                        : colors.blueAccent[700]
                    }
                    borderRadius="4px"
                    >
                         {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
                       
                       <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                        {access}
                       </Typography>
                </Box>
            )
        }
    }

]

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members"/>
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid 
                rows= {mockDataTeam}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;