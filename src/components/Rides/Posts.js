import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:"",
      drive:""
    }
  };
  
  componentDidMount() {
    api.getUsers()
    .then(results =>
      this.setState({
        users:results
      })
    );
  }
  
  render() {
    return (
      <div className="post">
      {this.props.rides.map((ride) => (
          <div className="ride-container" key={ride.id} _details={this.props.onClick}>
            {console.log(ride)}
            {this.state.users?
              <div>
                <img src={`images/${this.state.users.data[ride.driver-1].picture}`}/> 
              </div>
            :  
              null
            }
            <br></br>
            <div>Leaving {ride.date} at {ride.time}</div>
            <div>From: {ride.start_location} To: {ride.end_location} </div>
            <div>User: 'Example' Rating: '1-5'</div>
            <div>Number of Passengers: {ride.passengers}</div>
            <div>Price: ${ride.price}</div>
            <Link to={`/ride/${ride.id}`}><button>View Details</button></Link>
            <br></br>
          </div>
      ))}
      </div>
    );
  }
}
export default Post;
