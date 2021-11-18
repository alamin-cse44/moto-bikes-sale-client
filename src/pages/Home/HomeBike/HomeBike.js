import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeBikeShow from '../HomeBikeShow/HomeBikeShow';

const HomeBike = () => {
    
    const [bikes, setBikes] = useState([]);
    

    useEffect( () => {
        fetch('https://gentle-coast-64349.herokuapp.com/homeBikes')
        .then(res => res.json())
        .then(data => setBikes(data))  
    } ,[])

    return (
        <Container sx={{mt:8}}>
            <Typography variant="h4" sx={{fontWeight:'medium', color:'#18ffff'}}>Available Bikes</Typography>
            <Grid container spacing={3}>
            {
                bikes.map(bike => <HomeBikeShow
                key={bike._id}
                bike={bike}
                ></HomeBikeShow>)
            }
            </Grid>
        </Container>
    );
};

export default HomeBike;