import {Box, Button,Typography,TextField,CircularProgress} from "@mui/material"
import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import {Navigate, useNavigate } from "react-router-dom"
const Login = () =>{

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const [token, setToken] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    // Checking if user is not loggedIn
    if (isLoggedIn) {
      navigate("/protected");
    } 
  }, [navigate, isLoggedIn]);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true)
    const liveUrl= "https://backend-gl.up.railway.app/api/v1/login"
    const testUrl = "http://localhost:3000/api/v1/login"
    fetch(liveUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email:`${email}`,password:`${password}`})
    })
    .then(response => {
      if (response.status === 403) {
        alert("Error: Email o password incorrectos, por favor intente nuevamente.");
      } else {
        return response.json();
      }
    })
      .then(data => {
       const token = data.token
       const userId =data.userId
        console.log(userId);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        setLoading(false)
        setisLoggedIn(true)
    })
    .catch(error => {
      alert("Error: " + error.message);
  });
  }

  
    
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
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 100, 200, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "16px", textAlign: "center" }}
        >
          Welcome to Goalab
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
        <Link to="/register" style={{ textDecoration: 'none' }}>
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
