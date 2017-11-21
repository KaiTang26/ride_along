import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Register from './Register';

const SignIn = styled.div`
  float: right;
`;
// const Login = styled.a`
//   color: white;
//   font-family: Lato;
//   font-size: 1em;
//   padding: 1em;
//   display: inline-block;
// `;


class UserNav extends Component {

  render() {
    return (
      <SignIn>
        {/* <Login /> */}
        <Register />
      </SignIn>
    );
  }
}

export default UserNav;
