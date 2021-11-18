import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Bookings from '../Bookings/Bookings';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    const {user} = useAuth();
    return (
        <>
        <Typography variant="h6" sx={{fontWeight:500, m:2}}>
                WelCome <span style={{color:'red', fontWeight:'bold'}}>{user?.displayName}</span> To the DashBoard 
            </Typography>
        <Grid container spacing={2} sx={{alignItems:'center'}}>
            
                <Grid item xs={12} sm={12} md={5}>
                 <Calendar 
                 date={date}
                 setDate={setDate}
                 ></Calendar>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Bookings date={date}></Bookings>
                </Grid>
                
            </Grid>
            </>
    );
};

export default DashboardHome;