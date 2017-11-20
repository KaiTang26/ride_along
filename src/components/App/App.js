import React, { Component } from 'react';
import classnames from 'classnames';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import apii from '../utils/apii';
// var apii = require('../utils/apii')
=======
import { Link } from 'react-router-dom'
import FrontHeader from '../Front/FrontHeader.js';
>>>>>>> 745defa8501ae1f73565ecf8846c151ff3387ba4

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
    apii.fetchExpressTest()
      .then((result)=>{
        console.log(result)
      })
  }
}

export default App;
