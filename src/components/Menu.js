import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserPic from './Bill.jpg';

const Nav = styled.div`
  overflow: hidden;
  height: 65px;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255, .99);
`;

const Logotype = styled.h1`
  font-size: 150%;
  font-weight: bold;
  margin: .85em;
  float: left;
  color: ${gs.green};
`;

const UserLinks = styled.div`
  float: right;
`;

const Li = styled.div`
  display: inline-block;
  font-size: 90%;
  font-family: Lato;
  vertical-align: top;
  padding: 1.7em 1em;
`;

const ProfilePic = styled.div`
  background: url(${UserPic});
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
  margin: .66em;
  display: inline-block;
`;

const Menu = () => (

  <Nav>
    <Logotype>Ride Along</Logotype>
    <UserLinks>
      <Li><Link to='/ride'>Find Ride</Link></Li>
      <Li><Link to='/trip'>Post Ride</Link></Li>
      <ProfilePic/>
    </UserLinks>
  </Nav>
);

export default Menu;