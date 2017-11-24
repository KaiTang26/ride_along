import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RideReview from './RideReview';

class ActiveRides extends Component {

  render() {
    return (
      <div className="active-rides">
        {console.log(this.props.rides)}
        {console.log(this.props.rides[0].trip.date)}
        {console.log(new Date())}
        {this.props.rides.map((ride) => (
         <div>
          {new Date(this.props.rides[0].trip.date) > new Date()?

            <div className="profileRide-container" key={ride.trip.id}>
              {console.log(this.props)}
              <br></br>
              <div>{ride.trip.date}</div>
              <div>From: {ride.trip.start_location} To: {ride.trip.end_location} </div>
              <div>Driver: {ride.trip.driver}</div>
            </div>

            : null}
          </div>
        ))
        }

      </div>
    );
  }
}
export default ActiveRides;
