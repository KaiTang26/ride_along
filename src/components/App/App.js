import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import splash from './splash.jpg';

const Header = styled.section`
  height: 600px;
  background: url(${splash});
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-position-y: 55%;
  color: white;
  margin-bottom: 4em;
`;
const Darken = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.66);
`;
const SignIn = styled.div`
  float: right;
`;
const Login = styled.button`
  background: transparent;
  color: white;
  font-family: Lato;
  border: 0;
  font-size: 1em;
  padding: 1em;
`;

const Register = Login.extend`
`;

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Header>
          <Darken>
            <SignIn>
              <Login>
                Login
              </Login>
              <Register>
                Register
              </Register>
            </SignIn>
            <div id="name">
              <h1>Ride Along</h1>
              <h2>Get there <span>>></span> together</h2>
            </div>
          </Darken>
        </Header>

        {/* <FindRide>
        </FindRide>
        <PostRide>
        </PostRide> */}

        <Link to='about'><button>Test React Router</button></Link>
        <br />
        <br />
        <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
        <br />
        <br />
        <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
