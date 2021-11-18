import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddExploreBikes from '../AddExploreBikes/AddExploreBikes';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddHomeBike from '../AddHomeBike/AddHomeBike';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin,logOut} = useAuth();
  
  // This hook is used for nested route
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
            <Link style={{textDecoration: 'none'}} to='/home'>
             <Button>Home</Button>
            </Link>
            <br/>
            <Link style={{textDecoration: 'none'}} to='/explore'>
             <Button>Explore</Button>
            </Link>
            <br />
            <Link style={{textDecoration: 'none'}} to={`${url}`}>
             <Button>DashBoard</Button>
            </Link>
            {!admin && <Box>
                <Link style={{textDecoration: 'none'}} to={`${url}/pay`}>
                <Button>Pay</Button>
               </Link>
               <br />

              <Link style={{textDecoration: 'none'}} to={`${url}/review`}>
                <Button>Review</Button>
              </Link>
              <br />

            <Link to='/login' style={{textDecoration: 'none'}} onClick={logOut}>
              <Button variant="contained" color="success">Logout</Button>
            </Link>
              </Box>}
            <br />
            {admin && <Box>
                <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}>
                 <Button>Make Admin</Button>
                </Link>
                <br />

                <Link style={{textDecoration: 'none'}} to={`${url}/manageProducts`}>
                  <Button>Manage Products</Button>
                </Link>
                 <br />

            <Link style={{textDecoration: 'none'}} to={`${url}/addExploreBikes`}>
              <Button>Add Explore Bikes</Button>
            </Link>
            <br />

            <Link style={{textDecoration: 'none'}} to={`${url}/addHomeBike`}>
              <Button>Add Home Bikes</Button>
            </Link>
            <br />
            <Link to='/login' style={{textDecoration: 'none'}} onClick={logOut}>
              <Button variant="contained" color="success">Logout</Button>
            </Link>
              </Box>}
      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dash-Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/addExploreBikes`}>
          <AddExploreBikes></AddExploreBikes>
        </AdminRoute>
        <AdminRoute path={`${path}/addHomeBike`}>
          <AddHomeBike></AddHomeBike>
        </AdminRoute>
        
      </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
