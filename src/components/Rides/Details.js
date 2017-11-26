import React, {Component} from 'react';
import api from '../utils/api';
import Map from './map.js';
import ChatContainer from '../Chat/ChatContainer';
import AddCondition from '../Agreement/AddCondition';
import DisplayCondition from '../Agreement/DisplayCondition';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import Menu from '../Menu';

const Container = styled.div`
  margin-top: 65px;
`;

const RideDetailUI = (props) => {
  // console.log(props.id.origin)
  // const currentUser = localStorage.getItem("user_id");
  const currentUser = 1;
  let isDriver;
  {currentUser === props.id.driver
    ? isDriver = true
    : isDriver = false}

  return(
    <div>
      <Menu/>
      <Container>
        <Map origin={props.id.origin} destination={props.id.destination}/>
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
        <DisplayCondition user={currentUser} statements={props.id.agreements} isDriver={isDriver}/>
        {isDriver
          ? <AddCondition tripId={props.id.id}/>
          : null}
      

      </Container>
    </div>
  )
}

class Details extends Component {
  constructor(props) {
    super(props);
    // this.state = {ride: {}};
    // console.log(this.state)
    api.getRide(this.props.match.params.id)
    .then(result => {
      let ride = result.data
      this.setState({ride})
      console.log('Details', ride);
    })

  }
  // Can use if result.status to do condition rendering
  // componentWillMount() {

  // }
  render() {
    return (
      <div>
        {/* {this.state? <RideDetailUI id={this.state.ride} />
          : <h1>Loading </h1>}
          {this.state? <ChatContainer id={this.state.ride} />
            : <h1>Loading </h1>} */}
        {this.state? <RideDetailUI id={this.state.ride} />
          : ""}

        {this.state? <ChatContainer id={this.state.ride} />
          :"" }

            
      </div>
  )}
}
export default Details;
