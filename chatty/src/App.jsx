import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div >
        <div className="App-header">
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='chat'><button>Chatroom</button></Link>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
