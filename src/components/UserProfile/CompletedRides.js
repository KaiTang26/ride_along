import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';

import gs from '../GlobalStyles.js';
import styled from 'styled-components';
const user_id = localStorage.getItem("user_id");

const Time = styled.p`
font-style: italic;
font-size: 90%;
`;
const Where = styled.p`
font-weight: bold;
margin-bottom: .25em;

`;

const Pop = styled.div`
  border: none;
  background: transparent;
  margin: -.5em -1.5em 0;
  font-weight: bold;

  // border-bottom: 1px solid;
`;

const Driver = styled.p`
`;

class CompletedRides extends Component {

  render() {
    return (
      <div className="completed-rides">
        {this.props.rides.map((ride) => (
         <div>
          {new Date(ride.trip.date) < new Date()?
            <div className="profileRide-container" key={ride.trip.id}>
              <br></br>
              <Where> {ride.trip.start_location} – {ride.trip.end_location} </Where>

              <Time>{ride.trip.date}</Time>

              

              {this.props.users?
                <Driver>Driver: {this.props.users[ride.trip.driver-1].first_name}</Driver>
              :
                null
              }
              {user_id == this.props.param?
                <Pop>
                <ReviewForm trip_id={ride.trip.id}/>
                </Pop>
              :
                null
              }

            
              <br></br>
            </div>

            :
              null
            }
          </div>
        ))}
      </div>
    );
  }
}
export default CompletedRides;
