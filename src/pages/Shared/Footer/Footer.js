import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, background:'#00c853', p:2, alignItems:'center', justifyContent:'center', mt:8 }}>
            <h2>Footer</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                <Grid item xs={2} sm={4} md={4} >
                    <Button sx={{background:'#8e24aa'}} variant="contained">Subscribe us</Button>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                    <Typography>Fast Delivery</Typography>
                    <Typography>Safe Service</Typography>
                    <Typography>Buy Hurry</Typography>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <Typography variant="h6">Layouts</Typography>
                    <Link style={{textDecoration:'none', color:'black'}} to='/'>
                        <Button color="inherit">Home</Button>
                    </Link>

                    <Link style={{textDecoration:'none', color:'black'}} to='/explore'>
                        <Button color="inherit">Explore</Button>
                    </Link>

                    <Link style={{textDecoration:'none', color:'black'}} to='/login'>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Grid>
               
            </Grid>

        </Box>
    );
};

export default Footer;