import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.webp';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError, signWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        // e.target.reset();
    }

    const handleGoogleLogin = e =>{
        e.preventDefault();
        signWithGoogle(location, history);
    }


    return (
        <Container sx={{mt:8}}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={5} sx={{ boxShadow: 2 }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb:2 }}>
                    Please Register
            </Typography>
                 {!isLoading && <form onSubmit={handleLoginSubmit}>
                 <TextField 
                    sx={{width: '75%', m:1}}
                    id="standard-basic" 
                    label="Your Name" 
                    name = "name"
                    onBlur={handleOnBlur} 
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", mt:1}}
                    id="standard-basic" 
                    label="Your Email"
                    name="email"
                    onBlur={handleOnBlur}
                    type="email" 
                    variant="standard" />

                    <TextField 
                    sx={{width:"75%", mt:1}}
                    id="standard-basic" 
                    label="Your Password"
                    name="password"
                    onBlur={handleOnBlur}
                    type="password" 
                    variant="standard" />

                    <TextField 
                    sx={{width: '75%', m:1}}
                    id="standard-basic" 
                    label="ReType Your Password" 
                    type="password" 
                    name = "password2"
                    onBlur={handleOnBlur} 
                    variant="standard" />

                    <Button variant="contained" sx={{width: '75%', m:2}} type="submit">Register</Button>
                    
                    <NavLink style={{textDecoration:'none'}} to='/login'>
                        <Button variant="text">Have an acount? Please Login</Button> <br />
                    </NavLink>

                 </form>}
                 <Button onClick={handleGoogleLogin}  variant="contained" sx={{width: '75%', m:1, background:'green'}} type="submit">Login with Google</Button>
                
                 {
                     isLoading && <CircularProgress />
                 }
                 {
                     user?.email && <Alert severity="success">User is Created Successfully!</Alert>
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
    );
};

export default Register;