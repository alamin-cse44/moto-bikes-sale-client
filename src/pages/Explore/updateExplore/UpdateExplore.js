import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const UpdateExplore = () => {

    const [bike, setBike] = useState({});
    const {id} = useParams();

    useEffect( ()=>{
        const url = `https://gentle-coast-64349.herokuapp.com/exploreBikes/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBike(data))
    } ,[])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedBike = {...bike};
        updatedBike[field] = value;
        setBike(updatedBike);
        console.log(updatedBike);
        e.preventDefault();
    }

    const handleAddBike = e => {
        const url = `https://gentle-coast-64349.herokuapp.com/exploreBikes/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Bike Updated Successfully!');
                setBike({});
            }
            console.log(data);
        })
        e.preventDefault();
    }

    return (
        <Grid spacing={2}>
        <Grid xs={12} sm={12} md={12}>
        <div>
        <h2>Update <span style={{color:'red'}}>{bike.name}</span> Bike for Sale!</h2>
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
        <Button type="submit" variant="contained">Update Bike</Button>
        <NavLink to='/explore' style={{textDecoration:'none', marginLeft:"20px"}}>
             <Button type="submit" variant="contained">Go Back</Button>
        </NavLink>
        </form>

    </div>
        </Grid>
    </Grid>
    );
};

export default UpdateExplore;