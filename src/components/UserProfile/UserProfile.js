import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from 'styled-components';
import gs from '../GlobalStyles';
import api from '../utils/api';

import Menu from '../Menu';
import Road from './cover.jpg';

import ActiveRides from './ActiveRides'
import CompletedRides from './CompletedRides'
import EditProfile from './EditProfile';
import Reviews from './Reviews';
import UserPic from './Bill.jpg';

const ProfilePic = styled.div`
  background: url(${UserPic});
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-size: cover;
  margin: .66em;
  display: inline-block;
  box-shadow: 1px -1px 20px 1px rgba(0,0,0,0.5);
`;


const Profile = styled.section`
  max-width: 900px;
  margin: 0 auto;
  margin-top: -6em;
`;

const Name = styled.h2`
  font-size: 275%;
  font-weight: bold;
  margin: 1em;
  text-align: center;
  margin: -3.25em auto 1em;
  font-weight: 900;
  font-family: Lato;
  padding: .5em;
`;

const CoverPic = styled.div`
  background: url(${Road});
  background-size: cover;
  background-position-y: 45%;
  height: 300px;
  max-width: 100%;
`;

const Section = styled.section`
  margin: 3em 2.7em;

`;

const H3 = styled.h3`
  font-size: 70%;
  letter-spacing: .5px;
  font-weight: 900;
  font-family: Lato;
  text-transform: uppercase;
  margin-bottom: .85em;
  color: ${gs.golden};
`;

const Text = styled.p`
  line-height: 1.5;
`;

const LeftText = Text.extend`
  font-style: italic;
  font-size: 90%;
`;

const Info = styled.div`
  overflow: hidden;
`;

const Left = styled.div`
  float: left;
  width: 290px;
  text-align: center;
  > section p
    font-style: italic;
`;

const Right = styled.div`
  float: right;
  width: 65%;
`;

const EditButton = styled.button`

`;
//
// function HasRides(props) {
//   if (true) {
//     console.log("has rides");
//     return <profileRides rides={props}/>;
//   }
//   console.log("no rides");
//   return null;
// }


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
      about: ""
    }
  };

// userTrips

  componentDidMount() {
    // This is how you get the user from cookie
    const user_id = localStorage.getItem("user_id");
    // const params = req.params.id;
    // console.log(params);

    (api.getReviews(this.props.match.params.id))
    .then(results =>
      this.setState({
        reviews:results
      })
    );

    (api.userTrips(this.props.match.params.id))
    .then(results =>
      this.setState({
        first_name: results.data.first_name,
        last_name: results.data.last_name,
        picture: results.data.picture,
        email: results.data.email,
        drivers_license: results.data.drivers_license,
        about: results.data.about,
        trip: results.data.user_trips
      })
    );
// Do something with the results but it looks like the call works fine

  }

  render() {

    return (
      <div>
      <Menu/>
      <CoverPic/>
      <Profile>

        <ProfilePic />

        <Name>
          Hello {this.state.first_name}!
        </Name>

        <Info>
          <Left>

            <Section>
              <EditProfile info={this.state}/>
            </Section>

            <Section>
              <H3>Last Login</H3>
              <LeftText>1 day ago</LeftText>
            </Section>

            <Section>
              <H3>Response Rate</H3>
              <LeftText>95%</LeftText>
            </Section>

            <Section>
              <LeftText>
                {this.state.trip?
                  <div>
                    <H3>Active Rides</H3>
                    <ActiveRides rides={this.state.trip}  />
                  </div>
                  : <h1>Loading </h1>}
              </LeftText>
            </Section>

            <Section>
              <LeftText>
                {this.state.trip?
                  <div>
                    <H3>Completed Rides</H3>
                    <CompletedRides rides={this.state.trip}  />
                  </div>
                  : <h1>Loading </h1>}
              </LeftText>
            </Section>

          </Left>

          <Right>
            <Section>
              <H3>About</H3>
              <Text>{this.state.about}</Text>
            </Section>


            <Section>
              <H3>Reviews</H3>
              {this.state?
                <div>
                  <Reviews reviews={this.state.reviews}/>
                </div>
                : <h1>Loading </h1>}
            </Section>
          </Right>
        </Info>
      </Profile>

      </div>
    );
  }
}
