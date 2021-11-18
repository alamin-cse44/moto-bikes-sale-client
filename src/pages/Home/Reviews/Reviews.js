import React,{useState, useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';

const Reviews = () => {

    const [review, setReview] = useState([])

    useEffect(() =>{
        fetch('https://gentle-coast-64349.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    } ,[])

    return (
        <Container sx={{mt:10}}>
            <Typography variant="h4" sx={{fontWeight:'bold', mb:5, color:'#18ffff'}}>
                Customar Review
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                review.map(rev => <ShowReview
                    key={rev._id}
                    rev={rev}
                    ></ShowReview>)
            }
           </Grid>
        </Container>
    );
};

export default Reviews;