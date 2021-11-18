import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { TextFieldsOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, bike, date, setBookingSuccess}) => {

    const {name,price,img} = bike;
    const {user} = useAuth();
    const initialInfo = {name:user.displayName, email:user.email, phone:''};
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
        e.preventDefault();
    }

    const handleBookingSubmit = e =>{
        e.preventDefault();
        // collect data
        const booking = {
            ...bookingInfo,
            price: price,
            img: img,
            bikeName: name,
            date: date.toLocaleDateString()
        }
        // console.log(booking);

        // send to the server 
        fetch('https://gentle-coast-64349.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookingSuccess(true);
            handleBookingClose();
        })
    }
    
    return (
            <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography sx={{mb:2}} id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                  <form onSubmit={handleBookingSubmit}>
                    
                    <TextField 
                        id="outlined-size-small"
                        name="name"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        sx={{width:'100%',  mt:1}}
                        size="small"
                        />
                    <TextField 
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        sx={{width:'100%',  mt:1}}
                        size="small"
                        />
                    <TextField 
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue='Your Phone'
                        sx={{width:'100%',  mt:1}}
                        size="small"
                        />
                    <TextField 
                        disabled
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        defaultValue={price}
                        sx={{width:'100%',  mt:1}}
                        size="small"
                        />
                    <TextField 
                        disabled
                        id="outlined-size-small"
                        name="img"
                        onBlur={handleOnBlur}
                        defaultValue={img}
                        sx={{width:'100%',  mt:1}}
                        size="small"
                        />
                    <TextField 
                        disabled
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        sx={{width:'100%',  mt:1, mb:1}}
                        size="small"
                        />
                    
                    <Button type="submit" variant="contained">Confirm Order</Button>
                  </form>
                </Box>
            </Modal>
    );
};

export default BookingModal;