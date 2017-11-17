import React from 'react';
import App from './containers/AppContainer';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/chat" component={Chat} />
      </div>
    </Router>
  )
};

export default Routes;
