// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
// import App from './App.jsx';


ReactDOM.render(
  <div>
    <Routes />
  </div>,
  document.getElementById('react-root')
);
// Put this into router to render app
{/* <App />, */}
