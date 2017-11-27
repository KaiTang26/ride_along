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
              {console.log(this.props)}
              <br></br>
              <div>{ride.trip.date}</div>
              <div>From: {ride.trip.start_location} To: {ride.trip.end_location} </div>
              <div>Driver: {ride.trip.driver}</div>
              {user_id == this.props.param?
                <div>
                  {console.log(this.props.param)}
                <ReviewForm trip_id={ride.trip.id}/>
                </div>
              :
                <div>{console.log(this.props)}</div>
              }
              <br></br>
            </div>

            : null}
          </div>
        ))
        }

      </div>
    );
  }
}
export default CompletedRides;
