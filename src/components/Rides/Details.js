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
  padding-top: 65px;
`;
const Left = styled.div`
  float: left;
  width: 40%;
  z-index: 1;
  position: relative;
`;
const Right = styled.div`
  float: right;
  width: 60%;
  position: fixed;
  right: 0;

`;

const currentUser = localStorage.getItem("user_id");

const RideMap = (props) => {
    return(
    <Map origin={props.id.origin} destination={props.id.destination} start_location={props.id.start_location} end_location={props.id.end_location}/>
  )
}

const RideDetailUI = (props) => {


// const currentUser = 1;
  let isDriver;
  {currentUser === props.id.driver
    ? isDriver = true
    : isDriver = false}


  return(
    <div>
    {console.log(props)}
    <h1>Ride from {props.id.start_location} to {props.id.end_location} </h1>
    <h2>Total distance: {props.id.distance}</h2>
    <h2>Total duration: {props.id.duration}</h2>
    <h2>Leaving {props.id.date} at {props.id.time}</h2>
    <br></br>
    {/* <getDriverName/> */}
    <h2>{props.driver.first_name}</h2>
    <img src={`/images/${props.driver.picture}`}/>
    <br></br>
    <h3>{props.driver.first_name} is looking to have {props.id.passengers} passengers join the ride.</h3>
    <br></br>
    <p>Some text in paragraph form</p>
    <br></br>
      {/* <DisplayCondition user={currentUser} statements={props.id.agreements} isDriver={isDriver}/> */}
      {isDriver
        ? <AddCondition tripId={props.id.id}/>
        : null}
    </div>
  )
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      ride:{driver:0}
    };

    api.getRide(this.props.match.params.id)
    .then(result => {
      let ride = result.data
      // alert(result.data.driver)
      this.setState({ride})
      return result
    })
    .then(result => {
      api.userInfo(1)
      .then(results => {
        this.setState({
          user:results.data
        })
      })
    })
  }



  // }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Left>
          {this.state?
              <div>
                <RideDetailUI id={this.state.ride} driver={this.state.user} />
                <ChatContainer id={this.state.ride} />
              </div>
              :"" }
          </Left>

          <Right>
          {this.state.ride.origin?
          <RideMap id={this.state.ride} />
            : ""}

          </Right>
        </Container>
      </div>
  )}
}
export default Details;
