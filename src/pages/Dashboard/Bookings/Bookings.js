import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Bookings = ({date}) => {
    const {user} = useAuth();
    const [booking, setBookings] = useState([]);

    useEffect( ()=>{
        const url = `https://gentle-coast-64349.herokuapp.com/bookings?email=${user.email}&date=${date}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookings(data)
        })
    } ,[date])

    const handleDeleteBike = id => {
      console.log(id);
      const proceed = window.confirm('Are you sure, You want to delete?');
      if(proceed){
          const url = `https://gentle-coast-64349.herokuapp.com/bookings/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount>0){
                  alert('Deleted Successfully!');
                  const remainingsBike = booking.filter(b => b._id !== id);
                  setBookings(remainingsBike);
              }
          })
      }
      
  }

    return (
        <div>
            <h2>Bookings {booking.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{  }} aria-label="Bookings Table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Bike</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Photo</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booking.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.bikeName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">
                <img style={{width:'100px'}} src={row.img} alt="" />
              </TableCell>
              <TableCell align="left">
                  <Button variant="contained" color="success" >Pending</Button>
                  <Button onClick={() => handleDeleteBike(row._id)} variant="contained" color="error" sx={{m:1}}>Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Bookings;