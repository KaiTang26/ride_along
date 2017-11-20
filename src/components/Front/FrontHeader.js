import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import splash from './splash.jpg';
import UserNav from '../UserNav.js';
import gs from '../GlobalStyles.js';

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
  background-color: rgba(0, 0, 0, 0.6);
`;

const Logotype = styled.h1`
  font-size: 550%;
  font-style: italic;
  padding: 2em 0 .6em;
`;

const Tagline = styled.h1`
  ${gs.sansSerif};
  font-weight: 700;
  font-size: 235%;
  font-style: italic;
  margin-right: .25em;
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

const FrontHeader = () => (
  <Header>
    <Darken>
      <UserNav />
        <Logotype>Ride Along</Logotype>
        <Tagline>Get there <span>>></span> together</Tagline>
    </Darken>
  </Header>
);

export default FrontHeader;