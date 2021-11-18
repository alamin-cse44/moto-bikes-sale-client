import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import img from '../../../images/explore_bike.jfif';
import Calendar from '../../Shared/Calendar/Calendar';

const ExploreHeader = ({date, setDate}) => {
    
    return (
        <Container>
            <Grid sx={{mt:5}} container spacing={2}>
                <Grid item xs={12} md={6} sx={{ boxShadow: 3 }}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>

                <Grid item xs={12} md={6}>
                  <img style={{width: '75%'}} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExploreHeader;