import { Container, Grid, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React from 'react';
import about from '../../../images/about.jpg';

const AboutUs = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{fontWeight:'bold', mt:10, mb:5, color:'#18ffff'}}>
                About Us
            </Typography>
            <Grid container spacing={2} sx={{display:'flex', mt:3}}>
                <Grid item xs={12} sm={12} md={6} sx={{backgroundColor:'#3f51b5', color:'white', p:2}}>
                    <ul>
                        <li>
                        The best place to sell of course is at Cycle Exchange. It’s hassle free, friendly, honest and fair. We give you a quick price and can arrange collection if you can’t get to us
                        </li>
                        <li style={{margin:'30px'}}>
                        The best place to sell of course is at Cycle Exchange. It’s hassle free, friendly, honest and fair. We give you a quick price and can arrange collection if you can’t get to us
                        </li>
                        <li>
                        The best place to sell of course is at Cycle Exchange. It’s hassle free, friendly, honest and fair. We give you a quick price and can arrange collection if you can’t get to us
                        </li>

                    </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{width:'100%'}} src={about} alt="" />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default AboutUs;