import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';

const H1 = styled.h1`
  font-weight: 900;
  color: #444;
  // color: ${gs.blue};
  font-size: 111%;
  margin: 3em 0 1.5em !important;

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
  > em {
    font-weight: bold;
  }
`;

const Field = styled.div`
  margin: .5em 0;
`;

const RideInfo = styled.div`
  margin: 2em 0;
  // background-color: ${gs.golden};
  // padding: 0 1em;
`;

const Button = styled.button`
  background: ${gs.golden};
  color: white;
  border: none;
  font-family: Lato;
  font-size: 75%;
  padding: .75em .8em;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 2px solid #a87010;
  &:hover {
    cursor: pointer;
    background: #d28c14;
    border-bottom: #a87010;
    border-top: 2px solid white;
  }
`;
class Post extends Component {
  render() {
    return (
      <div className="post">
      <H1>All Available Rides: </H1>
      {this.props.rides.map((ride) => (
          <RideInfo key={ride.id} _details={this.props.onClick}>
            {console.log(this.props)}
            <Field>
              <Label>Leaving</Label><P> {ride.date}</P>
            </Field>              
            <Field>
              <Label>From</Label> <P><em>{ride.start_location}  <Label> to</Label> {ride.end_location}</em></P> 
            </Field>
            <Field>
              <Label>Time</Label><P>{ride.time}</P>
            </Field>
            <Field>            
            <Label>User</Label> <P>'Example' Rating: '1-5'</P>
            </Field>
            <Field>            
              <Label>Number of Passengers <P>{ride.passengers}</P></Label>
            </Field>
            <Field>            
              <Label>Price</Label> <P>${ride.price}</P>
            </Field>            
            <Link to={`/ride/${ride.id}`}><Button>View Details</Button></Link>
          </RideInfo>
      ))}
      </div>
    );
  }
}
export default Post;
