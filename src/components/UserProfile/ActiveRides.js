import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ActiveRides extends Component {

  render() {
    return (
      <div className="active-rides">
        {this.props.rides.map((ride) => (
         <div>
          {new Date(ride.trip.date) > new Date()?
            <div className="profileRide-container" key={ride.trip.id}>
              <br></br>
              <div>{ride.trip.date}</div>
              <div>From: {ride.trip.start_location} To: {ride.trip.end_location} </div>
              {this.props.users?
                <div>Driver: {this.props.users[ride.trip.driver-1].first_name}</div>
              :
                null
              }
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
