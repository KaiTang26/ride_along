import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = styled.div`
  float: right;
`;
const Login = styled.a`
  color: white;
  font-family: Lato;
  font-size: 1em;
  padding: 1em;
  display: inline-block;
`;

const Register = Login.extend`
`;

class UserNav extends Component {

  render() {
    return (
      <SignIn>
        <Login>
          Login
        </Login>
        <Register>
          Register
        </Register>
      </SignIn>
    );
  }
}

export default UserNav;
