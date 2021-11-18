import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeBikeShow = ({bike}) => {
    return (
        <Grid item xs={12} sm={6} md={4} sx={{mt:5, borderRadius:5}}>
            <Card sx={{height:'100%',  backgroundColor:'',boxShadow: 3, p:2 }} >
                <CardMedia
                    component="img"
                    sx={{width:'300px', mx:'auto', borderRadius:5}}
                    image={bike.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}} component="div">
                    {bike.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'regular' }} color="text.secondary">
                    {bike?.description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'medium', mt:1, color:'green' }} color="text.secondary">
                    Price : ${bike?.price}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent:'center', marginBottom:'10px'}}>
                  <NavLink to='/explore' style={{textDecoration:'none'}}>
                  <Button  variant="contained" size="small">Explore The Bike</Button>
                  </NavLink>
                  
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HomeBikeShow;