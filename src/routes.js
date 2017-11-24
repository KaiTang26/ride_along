import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Trip from './components/Trip/Trip';
import UserProfile from './components/UserProfile';
import Rides from './components/Rides/Rides';
import Details from './components/Rides/Details';
import browserHistory from './history';
// import Login from './components/Login';
// import Callback from './components/Callback';

import {  Router, Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/trip" component={Trip} /> */}
        <PrivateUser exact path="/profile/:id" component={UserProfile} />
        <Route exact path="/ride" component={Rides} />
        <Route exact path="/ride/:id" component={Details}/>
        {/* <Route exact path="/login" component={Details}/> */}
        <PrivateDriver exact path="/trip" component={Trip} />
      </div>
    </Router>
  )
};
const PrivateUser = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem("user_id") ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: "/",
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const PrivateDriver = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem("drivers_license") ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: "/",
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default Routes;
