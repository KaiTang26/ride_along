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
  padding-top: 60px;
`;
const Left = styled.div`
  float: left;
  width: 40%;
  z-index: 1;
  position: relative;
  padding: 0px 1.75em 0 1.45em;
  line-height: 1.5;
`;
const Right = styled.div`
  float: right;
  width: 60%;
  position: fixed;
  right: 0;

`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 120%;
  margin: 2em 0 1.5em !important;

`;

const Label = styled.p`
  font-size: 75%;
  // letter-spacing: .5px;
  font-family: Lato;
  text-transform: uppercase;
  margin-bottom: .85em;
  color: ${gs.golden};
  display: inline-block;
  margin-right: .25em;
  font-weight: bold;
`;
 const P = styled.p`
  display: inline-block;
 `;

 const Field = styled.div`
  margin: .5em 0;
`;

const currentUser = localStorage.getItem("user_id");

const RideMap = (props) => {
    return(
    <Map origin={props.id.origin} destination={props.id.destination} start_location={props.id.start_location} end_location={props.id.end_location}/>
  )
}

const RideDetailUI = (props) => {
  // console.log(props.id.origin)
  // const currentUser = localStorage.getItem("user_id");

// const currentUser = 1;
  let isDriver;
  {currentUser === props.id.driver
    ? isDriver = true
    : isDriver = false}

  return(
    <div>

    <H1>{props.id.start_location} to {props.id.end_location} </H1>
    <Field>
    <Label>Total distance:</Label> <P>{props.id.distance}</P>
    </Field>
    <Field>
    <Label>Total duration:</Label> <P>{props.id.duration}</P>
    </Field>
    <Field>
    <Label>Leaving:</Label> <P>{props.id.date} </P>
    </Field>
    <Field>
    <Label>Time:</Label><P>{props.id.time}</P>
    </Field>
    <Field>
    <Label>Name</Label> <P>{props.id.driver}></P>
    <div>Image placeholder</div>
    </Field>
    <Field>
    <P>{props.id.driver} NAME is looking to have {props.id.passengers} passengers join the ride.</P>
    <P>Some text in paragraph form</P>
    </Field>
    <Field>
      <DisplayCondition user={currentUser} statements={props.id.agreements} isDriver={isDriver}/>
      {isDriver
        ? <AddCondition tripId={props.id.id}/>
        : null}
     </Field>
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
      // console.log(ride);
      // console.log('Details', ride);
    })

  }
  // Can use if result.status to do condition rendering
  // componentWillMount() {

  // }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Left>
          {this.state?
              <div>
                <RideDetailUI id={this.state.ride} />
                <ChatContainer id={this.state.ride} />
              </div>
              :"" }
          </Left>

          <Right>


          {/* {this.state? <RideDetailUI id={this.state.ride} />
            : <h1>Loading </h1>}
            {this.state? <ChatContainer id={this.state.ride} />
              : <h1>Loading </h1>} */}
          {this.state?
          <RideMap id={this.state.ride} />
            : ""}

          </Right>
        </Container>
      </div>
  )}
}
export default Details;
