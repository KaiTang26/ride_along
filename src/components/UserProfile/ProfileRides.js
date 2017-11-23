import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RideReview from './RideReview';

class ProfileRides extends Component {

  render() {
    return (
      <div className="profileRides">
        {console.log(this.props.rides)}
        {console.log(this.props.rides[0].trip)}
      {this.props.rides.map((ride) => (
          <div className="profileRide-container" key={ride.trip.id}>
            {console.log(this.props)}
            <br></br>
            <div>{ride.trip.date}</div>
            <div>From: {ride.trip.start_location} To: {ride.trip.end_location} </div>
            <div>Driver: {ride.trip.driver}</div>
            <RideReview trip_id={ride.trip.id}/>
            <br></br>
          </div>
      ))}
      </div>
    );
  }
}
export default ProfileRides;
