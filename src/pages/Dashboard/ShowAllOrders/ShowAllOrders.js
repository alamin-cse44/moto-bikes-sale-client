import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowAllOrders = ({orders, deleted}) => {


    const handleDeleteBike = (id) => {
        const proceed = window.confirm('Are you sure, You want to delete?');
        if(proceed){
            const url = `https://gentle-coast-64349.herokuapp.com/allbookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    alert('Deleted Successfully!');
                    deleted(id);
                }
            })
        }
    }

    const confirm = () => {
        alert('The order is accepted');
    }

    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{mt:5, borderRadius:5}}>
            <Card sx={{height:'100%',  backgroundColor:'',boxShadow: 3, p:2 }}>
                <CardMedia
                    component="img"
                    sx={{width:'300px', mx:'auto', borderRadius:5}}
                    image={orders.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}} component="div">
                    {orders.bikeName}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }} color="text.secondary">
                    Customer : {orders.name}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'medium', mt:1, color:'green' }} color="text.secondary">
                    Price : ${orders?.price}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent:'center', marginBottom:'10px'}}>
                  <Button onClick={confirm} variant="contained" size="small">Confirm</Button>
                  <Button onClick={() => handleDeleteBike(orders._id)} variant="contained" size="small">Delete Order</Button>
                  
                </CardActions>
            </Card>
        </Grid>
        </>
    );
};

export default ShowAllOrders;