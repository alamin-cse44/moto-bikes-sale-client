import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Navigation from './pages/Shared/Navigation/Navigation';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Explore from './pages/Explore/Explore/Explore';
import Footer from './pages/Shared/Footer/Footer';
import UpdateExplore from './pages/Explore/updateExplore/UpdateExplore';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path='/'>
           <Home></Home>
          </Route>

          <Route exact path='/home'>
           <Home></Home>
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
          <Navigation></Navigation>
            <Register />
          </Route>

          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path='/explore'>
            <Explore></Explore>
          </PrivateRoute>

          <Route path='/exploreBikes/update/:id'>
            <UpdateExplore></UpdateExplore>
            <Footer></Footer>
          </Route>

          <Route path="*">
            <Navigation></Navigation>
            <NotFound></NotFound>
          </Route>
  
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
