import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Trip from './components/Trip/Trip';
import Rides from './components/Rides/Rides';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/trip" component={Trip} />
        <Route exact path="/rides" component={Rides} />
      </div>
    </Router>
  )
};

export default Routes;
