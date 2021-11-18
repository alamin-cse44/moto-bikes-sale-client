import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import icon from '../../../images/cavity.png';

const ShowReview = ({rev}) => {
    const {name, description} = rev;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Paper sx={{p:2}}>
             <img style={{width:'60px'}} src={icon} alt="" />   
            <Typography variant="h5" sx={{fontWeight:'medium', color:'#e91e63'}}>{name}</Typography>
            <Typography sx={{textAlign:'left', mt:1}}>{description}</Typography>
            </Paper>
        </Grid>
    );
};

export default ShowReview;