import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div className="post">
      {this.props.rides.map((ride) => (
          <div className="ride-container" key={ride.id} _details={this.props.onClick}>
            {console.log(this.props)}
            <br></br>
            <div>Leaving {ride.date} at {ride.time}</div>
            <div>From: {ride.start_location} To: {ride.end_location} </div>
            <div>User: 'Example' Rating: '1-5'</div>
            <div>Number of Passengers: {ride.passengers}</div>
            <div>Price: $</div>
            <Link to={`/ride/${ride.id}`}><button>View Details</button></Link>
            <br></br>
          </div>
      ))}
      </div>
    );
  }
}
export default Post;
