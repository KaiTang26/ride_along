import React, {Component} from 'react';
import api from '../utils/api';
import Map from './map.js';


const RideDetailUI = (props) => {
  console.log(props.id.origin)

  return(
    <div>
    {console.log(props.id)}
    <h1>Ride from {props.id.start_location} to {props.id.end_location} </h1>
    <h2>Leaving {props.id.date} at {props.id.time}</h2>
    <br></br>
    <h2>Name: {props.id.driver}</h2>
    <div>Image placeholder</div>
    <br></br>
    <h3>{props.id.driver} is looking to have {props.id.passengers} passengers join the ride.</h3>
    <br></br>
    <p>Some text in paragraph form</p>
    <br></br>
    <Map origin={props.id.origin} destination={props.id.destination}/>
  </div>
  )
}
  


class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {ride: {}}
  }
  // Can use if result.status to do condition rendering
  componentWillMount() {
    api.getRide(this.props.match.params.id)
    .then(result => {
      let ride = result.data
      this.setState({ride})
      console.log(ride);
    })
  }
  render() {
    return (
      <div>
        <RideDetailUI id={this.state.ride} />
      </div>
  )}
}
export default Details;
