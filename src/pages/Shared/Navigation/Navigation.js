import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
  const {user, logOut} = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        textAlign:'left'
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right'
      }
    },
    mobile: {
      [theme.breakpoints.up('sm')]: {
         display: 'none'
      }
    }
  })
  const {navItem, navIcon,navItemContainer,navLogo,mobile} = useStyle();

  const [state, setState] = React.useState(false);


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className={mobile}
    >
      <List>
        
          <ListItem button>
            <ListItemText>
            <Link className={navItem} style={{textDecoration:'none', color:'black'}} to='/'>
             <Button color="inherit">Home</Button>
          </Link>
            </ListItemText>
            </ListItem>

            <ListItem>
            <ListItemText>
            <Link className={navItem} style={{textDecoration:'none', color:'black'}} to='/explore'>
           <Button color="inherit">EXPLORE</Button>
          </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            {
             !user?.email && 
               <ListItemText>
                <NavLink className={navItem} style={{textDecoration:'none', color:'black'}} to='/login'>
            <Button color="inherit">Login</Button>
          </NavLink>
                </ListItemText>
            }
          </ListItem>

          
          <ListItem>
            {
             user?.email && 
               <ListItemText>
                <NavLink className={navItem} style={{textDecoration:'none', color:'black'}} to='/dashboard'>
                <Button color="inherit">Dashboard</Button>
                </NavLink>
                </ListItemText>
            }
          </ListItem>

          <ListItem>
            {
             user?.email && 
               <ListItemText>
                <Button sx={{color:'green'}} color="inherit">{user?.displayName}</Button>
                </ListItemText>
            }
          </ListItem>

          <ListItem>
            {
             user?.email && 
               <ListItemText>
                <Button><img style={{width:'50px', borderRadius:'50%'}} src={user?.photoURL} alt="" /></Button>
                <Button onClick={logOut} color="inherit">Logout</Button>
                </ListItemText>
            }
          </ListItem>

            
      </List>
      <Divider />
    </Box>
  );

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left' }}>
            MOTO BIKE SHOW-ROOM
          </Typography>

          <Box className={navItemContainer}>
          <Link className={navItem} style={{textDecoration:'none', color:'white'}} to='/'>
             <Button color="inherit">Home</Button>
          </Link>
           
          <Link className={navItem} style={{textDecoration:'none', color:'white'}} to='/explore'>
           <Button color="inherit">EXPLORE</Button>
          </Link>

      
            {
             user?.email && 
                <NavLink className={navItem} style={{textDecoration:'none', color:'white'}} to='/dashboard'>
                <Button color="inherit">Dashboard</Button>
                </NavLink>
            }

            {
             user?.email && 
                <Button sx={{color:'black'}} color="inherit">{user?.displayName}</Button>
            }

            {
             user?.email && <Button><img style={{width:'50px', borderRadius:'50%'}} src={user?.photoURL} alt="" /></Button>
            }

            {
             user?.email && <Button onClick={logOut} color="inherit">Logout</Button>
            }

            {
             !user?.email &&  <NavLink className={navItem} style={{textDecoration:'none', color:'white'}} to='/login'>
                 <Button color="inherit">Login</Button>
                </NavLink>
            }

         
          
          {/* {
            user?.email ? 
            <Box>
                <NavLink className={navItem} style={{textDecoration:'none', color:'white'}} to='/dashboard'>
                <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button sx={{color:'black'}} color="inherit">{user?.displayName}</Button>
                  <Button><img style={{width:'50px', borderRadius:'50%'}} src={user?.photoURL} alt="" /></Button>
                <Button onClick={logOut} color="inherit">Logout</Button> 
            </Box>
            : <NavLink className={navItem} style={{textDecoration:'none', color:'white'}} to='/login'>
            <Button color="inherit">Login</Button>
          </NavLink>
          } */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
      
    <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
    );
};

export default Navigation;