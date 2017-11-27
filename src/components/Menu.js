import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserPic from './UserProfile/Bill.jpg';
import { Icon } from 'semantic-ui-react';

const Nav = styled.div`
  overflow: hidden;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255, .97);
  z-index: 100;
  box-shadow: 0px 5px 6px -6px #9c9b9b;
  box-shadow: 0px 0px 8px 0px #c3c2c2;
`;

const Logotype = styled.h1`
  font-size: 150%;
  font-weight: bold;
  margin: .75em .85em !important;
  float: left;
  font-style: italic;
  color: ${gs.green};
  font-family: Merriweather;
`;

const UserLinks = styled.div`
  float: right;
`;

const Li = styled.div`
  display: inline-block;
  font-weight: bold;
  letter-spacing: .1px;
  font-size: 90%;
  vertical-align: top;
  padding: 1.55em 1em;
  > a:hover {
    color: ${gs.coral};
  } 
`;

const ProfilePic = styled.div`
  background: url(${UserPic});
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
  margin: .5em;
  display: inline-block;
`;

const Icons = styled(Icon)`
  color: ${gs.blue};
  position: relative;
  bottom: 2px;
`

const Menu = () => (

  <Nav>
    <Logotype>Ride Along</Logotype>
    <UserLinks>
      <Li>
      <Link to='/ride'>
      <Icons fitted name='chevron right' size='tiny'/>
        <Icons fitted name='chevron right' size='tiny'/> Find Ride</Link></Li>
      <Li><Link to='/trip'>
      <Icons fitted name='chevron right' size='tiny'/>
        <Icons fitted name='chevron right' size='tiny'/> Post Ride</Link></Li>
      <ProfilePic/>
    </UserLinks>
  </Nav>
);

export default Menu;