import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddExploreBikes = () => {

    const [bikes, setBikes] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBike = {...bikes};
        newBike[field] = value;
        setBikes(newBike);
        console.log(newBike);
        

        e.preventDefault();
        // bikes.name, bikes.description, bikes.price, bikes.img
    }

    const handleAddBike = e => {
        fetch('https://gentle-coast-64349.herokuapp.com/exploreBikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikes)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Bike added successfully!');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    
    return (
        <Grid spacing={2}>
            <Grid xs={12} sm={12} md={12}>
            <div>
            <h2>Add A Bike for Sale!</h2>
            <form onSubmit={handleAddBike}>
            <TextField 
            label="Name" 
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
            
            <TextField 
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
            variant="standard" />

            <br /><br />
            <Button type="submit" variant="contained">Add Bike</Button>
            </form>
    
        </div>
            </Grid>
        </Grid>
    );
};

export default AddExploreBikes;