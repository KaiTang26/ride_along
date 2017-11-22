import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Trip from './components/Trip/Trip';
import UserProfile from './components/UserProfile';
import Rides from './components/Rides/Rides';
import Details from './components/Rides/Details';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/trip" component={Trip} />
        <Route exact path="/profile/1" component={UserProfile} />
        <Route exact path="/ride" component={Rides} />
        <Route exact path="/ride/:id" component={Details}/>
      </div>
    </Router>
  )
};
export default Routes;
