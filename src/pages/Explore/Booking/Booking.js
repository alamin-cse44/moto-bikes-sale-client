import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Booking = ({booking, date, setBookingSuccess, deleted}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const {admin} = useAuth();


    const handleDeleteBike = id => {
        const proceed = window.confirm('Are you sure, You want to delete?');
        if(proceed){
            const url = `https://gentle-coast-64349.herokuapp.com/exploreBikes/${id}`;
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

    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{mt:5, borderRadius:5}}>
            <Card sx={{height:'100%',  backgroundColor:'',boxShadow: 3, p:2 }}>
                <CardMedia
                    component="img"
                    sx={{width:'300px', mx:'auto', borderRadius:5}}
                    image={booking.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}} component="div">
                    {booking.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'regular' }} color="text.secondary">
                    {booking.description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'medium', mt:1, color:'green' }} color="text.secondary">
                    Price : ${booking?.price}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent:'center', marginBottom:'10px'}}>
                  <Button onClick={handleBookingOpen} variant="contained" size="small">Order Now</Button>
                  {
                      admin && <Box>
                          <NavLink style={{textDecoration:'none'}} to={`/exploreBikes/update/${booking._id}`}>
                          <Button sx={{m:1}} onClick="" variant="contained" size="small">Update</Button>
                          </NavLink>

                          <Button onClick={() => handleDeleteBike(booking._id)} variant="contained" size="small">Delete</Button>
                      </Box>
                  }
                </CardActions>
            </Card>
        </Grid>
        <BookingModal 
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        bike={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
        >

        </BookingModal>
        </>
    );
};

export default Booking;