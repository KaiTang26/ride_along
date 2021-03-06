import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import splash from './splash.jpg';
import gs from '../GlobalStyles.js';
import Login from '../Login';
import Register from '../Register';
import { Icon } from 'semantic-ui-react';

const Header = styled.section`
  height: 600px;
  background: url(${splash});
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-position-y: 55%;
  color: white;
  text-align: center;
  margin-bottom: 4em;
`;
const Darken = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Logotype = styled.h1`
  font-size: 550%;
  font-style: italic;
  padding: 1.75em 0 .5em;
  font-weight: bold;
`;

const Tagline = styled.h1`
  font-family: ${gs.sansSerif};
  font-weight: 700;
  font-size: 235%;
  font-style: italic;
  margin-right: .25em;
  letter-spacing: .5px;
  > span {
    font-size: 95%;
    letter-spacing: -3px;
    margin-right: 1.25px;
    font-weight: 900;
    margin: 0 2px 0 3px;
    position: relative;
    top: 2px;
  }
`;

const UserNav = styled.div`
  overflow: hidden;
  > div
    float: right;
`;

const Icons = styled(Icon)`
vertical-align: top !important;
margin-left: .1em !important;
font-size: .6em !important;
position: relative;
top: .55em;
`
const Icond = Icons.extend`
 margin-right: .2em !important;
 margin-left: 0 !important;
`

const FrontHeader = () => (
  <Header>
    <Darken>
      <UserNav>
      {/* { localStorage.getItem("user_id")&&
       <Link to="/">Post Trip</Link>
          } */}
        <Login />
        <Register />

      </UserNav>
        <Logotype>Ride Along</Logotype>

        
        <Tagline>Get there <Icons fitted name='chevron right' size='small'/>
        <Icond fitted name='chevron right' size='small'/> 
           {/* <span>>></span>  */}
             together</Tagline>
    </Darken>
  </Header>
)

export default FrontHeader;