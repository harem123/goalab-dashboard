import {Box, Button,Typography,TextField,} from "@mui/material"
import { useContext , useState, useEffect} from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import {Navigate, useNavigate } from "react-router-dom"

const Register = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const navigate = useNavigate();
    const [isRegister, setisRegister] = useState(false);
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const liveUrl= "https://backend-gl.up.railway.app/api/v1/register"
    const testUrl = "http://localhost:3000/api/v1/register"
    fetch(liveUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
          name: `${name}`,
          lastname: `${lastname}`
        })
    })
    .then(response => {
      if (response.status === 409) {
        throw new Error("Email already registered");
      } 
    })
    .then(data => {
      setisRegister(true)
    })
    .catch(error => {
        if (error.message === "Email already registered") {
          alert("El correo electronico ingresado, ya se encuentra registrado.");
        } else {
          alert("Ocurrio un error en el registro, por favor intente nuevamente");
        }
    });
  };
  
  useEffect(() => {
    // Checking if user have been registered
    if (isRegister) {
      alert("Registro exitoso. Será redirigido a la página de inicio de sesión.");
      navigate("/login");
    } 
  }, [navigate, isRegister]);

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
        <form onSubmit={handleSubmit}>
        <TextField
            id="name"
            label="Nombre"
            variant="filled"
            fullWidth
            margin="normal"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="lastname"
            label="Apellido"
            variant="filled"
            fullWidth
            margin="normal"
            value={lastname}
            onChange={handleLastnameChange}
          />
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
            Registro
          </Button>
        </form>
        <Box >
        <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button fullWidth variant="text"
        sx={{
          
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          
        }}
      >
        Login
      </Button>
      </Link>
      </Box>

      </Box>
      </Box>
    )


}
export default Register