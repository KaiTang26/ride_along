import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import api from '../utils/api';
// var apii = require('../utils/apii')


import FrontHeader from '../Front/FrontHeader';
import gs from '../GlobalStyles.js';


class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (

        <div className={classnames('App', className)} {...props}>
          <FrontHeader />
          <br/>
          <Link to='profile'><button>USER PROFILE PAGE</button></Link>
          <br/>
          <Link to='about'><button>Test React Router</button></Link>
          <br/>
          <Link to='trip'><button>Test trip React Router</button></Link>
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
