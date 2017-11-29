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
  text-align: center;
  margin: -3.25em 0 1em 1em;
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
const Img = styled.img`
  width: 280px;
  margin-right: 10px;
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

// For whatever reason when redirected the value below is wrong but if you just
// enter the localStorage bit instead of user_id it works

const user_id = localStorage.getItem("user_id");

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
      about: "",
      users:""
    }
  };

// userTrips

  componentDidMount() {

    api.getUsers()
    .then(results =>
      this.setState({
        users: results
      })
    );

    (api.getReviews(this.props.match.params.id))
    .then(results =>
      this.setState({
        reviews:results
      })
    );

    // (api.averageRating(this.props.match.params.id))
    // .then(results =>
    //   this.setState({
    //     reviews:results
    //   })
    // );

    (api.userTrips(this.props.match.params.id))
    .then(results =>
      this.setState({
        id: results.data.id,
        first_name: results.data.first_name,
        last_name: results.data.last_name,
        picture: results.data.picture,
        email: results.data.email,
        drivers_license: results.data.drivers_license,
        about: results.data.about,
        trip: results.data.user_trips,
      })
    );



  }

  render() {

    return (
      <div>
      <Menu/>
      <CoverPic/>
      <Profile>

        {/* <ProfilePic /> */}

        <Img src={`/images/${this.state.picture}`}/>
        {console.log(this.state)}
        {localStorage.getItem("user_id") == this.props.match.params.id?

          <Name>
            Hello {this.state.first_name}!
          </Name>
        :
          <Name>
            {this.state.first_name}
          </Name>
        }

        <Info>
          <Left>

          {localStorage.getItem("user_id") == this.props.match.params.id?
            <Section>
              <EditProfile info={this.state}/>
            </Section>
          :
          <div></div>
          }

            <Section>
              <H3>Last Login</H3>
              <LeftText>1 day ago</LeftText>
            </Section>

            <Section>
              <H3>Response Rate</H3>
              <LeftText>95%</LeftText>
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
                : null}
            </Section>

            <Section>

                {this.state.trip?
                  <div>
                    <H3>Active Rides</H3>
                    <ActiveRides rides={this.state.trip} users={this.state.users.data}  />
                  </div>
                  : null}

            </Section>

            <Section>

                {this.state.trip?
                  <div>
                    <H3>Completed Rides</H3>
                    <CompletedRides param={this.props.match.params.id} rides={this.state.trip} users={this.state.users.data}  />
                  </div>
                  : null}

            </Section>


          </Right>
        </Info>
      </Profile>

      </div>
    );
  }
}
