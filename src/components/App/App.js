import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
// import './style.css';
import api from '../utils/api';
import FrontHeader from '../Front/FrontHeader.js'
// var apii = require('../utils/apii')

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <FrontHeader />

        <Link to='about'><button>Test React Router</button></Link>
        <br />

        <Link to='trip'><button>Test trip React Router</button></Link>
        <br />
        <br />
        <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
        <br />
        <br />
        <button onClick={this.expressTest.bind(this)}>Test if Express and Sequelize are working</button>
        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }

  expressTest(){
    api.fetchExpressTest()
      .then((result)=>{
        console.log(result)
      })
  }
}

export default App;
