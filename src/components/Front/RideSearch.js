import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';

const Search = styled.section`
  overflow: hidden;
  // ${gs.maxWidth};
  max-width: 400px;
  margin: 0 auto;
  font-size: 175%;
  font-style: italic;
`;

const FindRide = styled.div`
  float: left;
  > a {
    border-bottom: 4px solid skyblue;
    display: inline-block;
  }
  > span {
    font-size: 95%;
    letter-spacing: -2px;
    margin-right: 1.25px;
    font-family: Lato;
    font-weight: 900;
    position: relative;
    top: 2px;
  }
`;

const PostRide = FindRide.extend`
  float: right;
`;

const RideSearch = () => (
  <Search>
    <FindRide>
      <span>>></span> <a>Find a Ride</a>
    </FindRide>
    <PostRide>
      <span>>></span> <a>Post a Ride</a>
    </PostRide>
  </Search>
);

export default RideSearch;
