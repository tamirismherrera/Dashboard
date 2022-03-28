import * as React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../img/logo.png";

import '../components/dashboard.css';
import { useAuth } from '../contexts/auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function Login() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     if (data.email == 'teste'){
//         console.log('olá');
//     }
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

const {user, signin} = useAuth();
// const navigate = useNavigate();

// const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log("Olá")
//     setUser( "Tamiris");
//     console.log(user);
// }

// if(user){
//   return <Navigate to="/home"/>; 
// }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="" />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={signin} noValidate sx={{ mt: 1 }}>
            <TextField
              color="warning"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              color="warning"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button 
             color="warning"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container >
              <Grid item xs={8} >
                <Link href="#" variant="body1">
                  Esqueceu a senha ?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}