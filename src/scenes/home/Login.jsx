import {Box, Button,Typography,TextField,} from "@mui/material"
import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"




const Login = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
   
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Register button clicked");
  };

    return (
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
        <Box
        sx={{
          width: "400px",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "16px", textAlign: "center" }}
        >
          Bienvenido a Goalab
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            sx={{ fontSize: "14px", fontWeight: "bold",margin: "16px 0",backgroundColor: colors.blueAccent[700] ,color: colors.grey[100],}}
          >
            Login
          </Button>
        </form>
        <Box >
        <Link to="/results" style={{ textDecoration: 'none' }}>
        <Button fullWidth variant="text"
        sx={{
          
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          
        }}
      >
        Registro
      </Button>
      </Link>
      </Box>

      </Box>
      </Box>
    )


}
export default Login