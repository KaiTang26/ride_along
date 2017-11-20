import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import FrontHeader from '../Front/FrontHeader';
import SignIn from '../SignIn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const customTheme = {
  palette: { 
    primary1Color: "red",
    primary2Color: "green",
    primary3Color: "orange"
  }
};

const theme = getMuiTheme(customTheme);


class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className={classnames('App', className)} {...props}>
          <FrontHeader />

          <SignIn />

          <Link to='about'><button>Test React Router</button></Link>
          <br />
          <br />
          <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
          <br />
          <br />
          <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
          <div style={{ padding: '30px' }}>{this.props.results}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
