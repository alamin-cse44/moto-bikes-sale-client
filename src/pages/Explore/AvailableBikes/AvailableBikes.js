import { Alert, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';


// const bikes = [
//     {
//         id : 1,
//         name : 'X_Bike',
//         time : '08.00 AM - 12.00 AM',
//         img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFWCPJFABzu3mMnG-3K_kvbSlX4O0l5_UIA&usqp=CAU'
//     },
//     {
//         id : 2,
//         name : 'Y_Bike',
//         time : '08.00 AM - 12.00 AM',
//         img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFWCPJFABzu3mMnG-3K_kvbSlX4O0l5_UIA&usqp=CAU'
//     },
//     {
//         id : 3,
//         name : 'Z_Bike',
//         time : '08.00 AM - 12.00 AM',
//         img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFWCPJFABzu3mMnG-3K_kvbSlX4O0l5_UIA&usqp=CAU'
//     }
// ]

const AvailableBikes = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bikes, setBikes] = useState([]);

    useEffect( () => {
        fetch('https://gentle-coast-64349.herokuapp.com/exploreBikes')
        .then(res => res.json())
        .then(data => setBikes(data))  
    } ,[])

    const deleted = (id) => {
        const remainingBikes = bikes.filter(book=>book._id !== id);
        setBikes(remainingBikes);
    }

    return (
        <>
        <Container sx={{mt:8}}>
            <h2 style={{color:'#18ffff'}}>Available Bikes On {date.toDateString()}</h2>
            {bookingSuccess && <Alert severity="success">Booking Successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bikes.map(booking => <Booking 
                    key={booking._id}
                    booking={booking}
                    date={date}
                    deleted={deleted}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
        </>
    );
};

export default AvailableBikes;