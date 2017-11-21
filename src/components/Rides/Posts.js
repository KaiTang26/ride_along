import React, {Component} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
      {this.props.rides.map((ride) => (
          <a className="ride-container" key={ride.id} onClick={this.props.onClick}>
            {console.log(this.props)}
            <br></br>
            <div>Leaving {ride.date} at {ride.time}</div>
            <div>From: {ride.start_location} To: {ride.end_location} </div>
            <div>User: 'Example' Rating: '1-5'</div>
            <div>Number of Passengers: {ride.passengers}</div>
            <div>Price: $</div>
            <br></br>
          </a>
      ))}
      </div>
    );
  }
}
export default Post;
