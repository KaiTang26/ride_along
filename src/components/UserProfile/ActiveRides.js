import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import gs from '../GlobalStyles.js';
import styled from 'styled-components';

const Time = styled.p`
  font-style: italic;
  font-size: 90%;
`;
const Where = styled.p`
font-weight: bold;
margin-bottom: .25em;

`;

class ActiveRides extends Component {

  render() {
    return (
      <div className="active-rides">
        {this.props.rides.map((ride) => (
         <div>
          {new Date(ride.trip.date) > new Date()?
            <div className="profileRide-container" key={ride.trip.id}>
              <br></br>
              <Where>{ride.trip.start_location} – {ride.trip.end_location} </Where>
              <Time>{ride.trip.date}</Time>
              
              {/* {this.props.users?
                <div>Driver: {this.props.users[ride.trip.driver-1].first_name}</div>
              :
                null
              } */}
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
export default ActiveRides;
