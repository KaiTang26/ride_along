import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const user_id = localStorage.getItem("user_id");

class CompletedRides extends Component {

  render() {
    return (
      <div className="completed-rides">
        {this.props.rides.map((ride) => (
         <div>
          {new Date(ride.trip.date) < new Date()?
            <div className="profileRide-container" key={ride.trip.id}>
              <br></br>
              <div>{ride.trip.date}</div>
              <div>From: {ride.trip.start_location} To: {ride.trip.end_location} </div>
              {this.props.users?
                <div>Driver: {this.props.users[ride.trip.driver-1].first_name}</div>
              :
                null
              }
              {user_id == this.props.param?
                <div>
                <ReviewForm trip_id={ride.trip.id}/>
                </div>
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
