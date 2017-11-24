import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import FrontHeader from '../Front/FrontHeader.js';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <FrontHeader />
      </div>
    );
  }
}

export default App;
