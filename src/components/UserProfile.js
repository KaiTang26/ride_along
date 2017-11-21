import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import api from './utils/api';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu';
import Road from './cover.jpg';

const user_id = 1;
const userInfo = api.userInfo(user_id);

const Profile = styled.section`
  max-width: 900px;
  margin: 0 auto;

`;

const Name = styled.h2`
  font-size: 225%;
  font-weight: bold;
  margin: 1em;
  text-align: center;
  max-width: 250px;
  background: white;
  margin: -.9em auto 0;
  font-weight: 900;
  font-family: Lato;
  padding: .5em;
`;

const CoverPic = styled.div`
  background: url(${Road});
  background-size: cover;
  background-position-y: 50%;
  height: 300px;
  max-width: 100%;
`;

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      picture: "",
      email: "",
      drivers_license: "",
    }
  };

  componentDidMount() {
    (api.userInfo(user_id))
    .then(results => 
      this.setState({
        first_name: results.data.first_name,
        last_name: results.data.last_name,
        picture: results.data.picture,
        email: results.data.email,
        drivers_license: results.data.drivers_license
      })
    );
  }
  


  render() {
    
    return (
      <div>
      <Menu/>
      <CoverPic/>
      <Profile>
        <Name>
          Hello {this.state.first_name}!
        </Name>

      </Profile>  

      </div>
    );
  }
}