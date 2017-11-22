import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import Trip from './components/Trip/Trip';
import UserProfile from './components/UserProfile/UserProfile';
import Rides from './components/Rides/Rides';
import Details from './components/Rides/Details';
import gs from './components/GlobalStyles.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import { BrowserRouter as Router, Route } from 'react-router-dom';


const customTheme = {
  palette: { 
    primary1Color: `${gs.green}`,
    primary2Color: `${gs.orange}`,
    primary3Color: "orange"
  }
};

const theme = getMuiTheme(customTheme);


const Routes = () => {
  return (
    <MuiThemeProvider muiTheme={theme}>
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
    </MuiThemeProvider>
  )
};
export default Routes;
