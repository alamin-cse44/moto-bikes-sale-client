import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [review, setReview] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
        console.log(newReview);

        e.preventDefault();
    }

    const handleAddReview = e => {
        fetch('https://gentle-coast-64349.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Review added successfully!');
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <Grid spacing={2}>
        <Grid xs={12} sm={12} md={12}>
        <div>
        <h2>Add A Review</h2>
        <form onSubmit={handleAddReview}>
        <TextField 
        label={user.displayName} 
        type="text"
        name="name"
        sx={{width:'50%'}}
        onBlur={handleOnBlur}
        variant="filled" /> 
        
        <TextField
        label="Description"
        type="text"
        name="description"
        sx={{width:'50%', m:2}}
        multiline
        maxRows={4}
        onBlur={handleOnBlur}
        variant="standard" />
        
        {/* <TextField 
        label="Price" 
        type="number"
        name="price"
        sx={{width:'50%', m:2}}
        onBlur={handleOnBlur}
        variant="standard" />

        <TextField 
        label="Img-Url" 
        type="text"
        name="img"
        sx={{width:'50%', m:2}}
        onBlur={handleOnBlur}
        variant="standard" /> */}

        <br /><br />
        <Button type="submit" variant="contained">Add</Button>
        </form>

    </div>
        </Grid>
    </Grid>
    );
};

export default Review;