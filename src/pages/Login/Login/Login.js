import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import img from '../../../images/login.webp';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        // e.target.reset();
    }

    const handleGoogleLogin = e =>{
        e.preventDefault();
        signWithGoogle(location, history);
    }

    return (
        <>
        <Navigation></Navigation>
        <Container sx={{mt:8}}>
          <Grid container spacing={2} >
             <Grid item xs={12} sm={12} md={5} sx={{ boxShadow: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb:4 }}>
                    Please Login
            </Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:"75%", mt:1}}
                    id="standard-basic" 
                    label="Your Email"
                    name="email"
                    onBlur={handleOnBlur}
                    type="email" 
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", mt:2}}
                    id="standard-basic" 
                    label="Your Password"
                    name="password"
                    onBlur={handleOnBlur}
                    type="password" 
                    variant="standard" />

                    <Button variant="contained" sx={{width: '75%', m:2}} type="submit">Login</Button>
            
                    <NavLink style={{textDecoration:'none'}} to='/register'>
                        <Button variant="text">New user? Please Register</Button> <br />
                        <Button variant="text">OR</Button> <br />
                    </NavLink>
                 </form>
                 <Button onClick={handleGoogleLogin} variant="contained" sx={{width: '75%', m:1, background:'green'}} type="submit">Login with Google</Button> <br />
                 {
                     isLoading && <CircularProgress />
                 }
                 {
                     user?.email && <Alert severity="success">User logged in Successfully!</Alert>
                 }
                 {
                     authError && <Alert severity="error">{authError}</Alert>
                 }
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <img src={img} alt="" />
                </Grid>
            
            </Grid>
        </Container>
        </>
    );
};

export default Login;