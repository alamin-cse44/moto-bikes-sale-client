import { Container, Grid } from '@mui/material';
import React,{useState, useEffect} from 'react';
import ShowAllOrders from '../ShowAllOrders/ShowAllOrders';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect( () => {
        fetch('https://gentle-coast-64349.herokuapp.com/allbookings')
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
        })
    } ,[])

    const deleted = (id) => {
        const remainingBikes = allOrders.filter(order=>order._id !== id);
        setAllOrders(remainingBikes);
    }

    return (
        <Container sx={{mt:8}}>
            <h2 style={{color:'#18ffff'}}>Total Ordered Bikes {allOrders.length}</h2>
            
            <Grid container spacing={2}>
                {
                    allOrders.map(orders => <ShowAllOrders
                    key={orders._id}
                    orders={orders}
                    deleted={deleted}
                    ></ShowAllOrders>)
                }
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;