import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import api from '../utils/api';

const H1 = styled.h1`
  font-weight: bold;
  font-style: italic;
  color: ${gs.golden};
  font-size: 110%;
  padding-top: 1em;
`;

const Label = styled.p`
  font-size: 75%;
  font-family: Lato;
  text-transform: uppercase;
  margin-bottom: .85em;
  color: ${gs.golden};
  display: inline-block;
  margin-right: .5em;
  font-weight: bold;
`;

const To = Label.extend`
margin-left: .4em;
margin-right: .35em;
`

const P = styled.p`
  display: inline-block;
  > em {
    font-weight: 900;
  }
`;

const Field = styled.div`
  margin: .5em 0;
`;

const RideInfo = styled.div`
  margin: 1.5em 0;
  // background-color: ${gs.golden};
  // padding: 0 1em;
  border-top: 1px solid #f5d398;
  overflow: hidden;
`;

const Button = styled.button`
  background: #eba224;
  color: white;
  border: none;
  font-family: Lato;
  font-size: 70%;
  padding: .75em .8em;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 1px solid #c98613;
  &:hover {
    cursor: pointer;
    background: #db9214;
    border-bottom: #a87010;
    border-top: 1px solid white;
  }
`;
const Section = styled.div`
  // width: 30%;
  // float: left;
`;
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
      <H1>Currently Available Rides </H1>
      {this.props.rides.map((ride) => (
          <RideInfo key={ride.id} _details={this.props.onClick}>
            {console.log(this.props)}
          <Section>
                {this.state.users?
                    <div>
                      <img src={`images/${this.state.users.data[ride.driver-1].picture}`}/> 
                    </div>
                  :  
                    null
                  }
            <Field>
              <Label>From</Label> <P><em>{ride.start_location}  <To> to</To> {ride.end_location}</em></P> 
            </Field>
            <Field>
              <Label>Leaving</Label><P> {ride.date}</P>
            </Field> 
            <Field>
              <Label>Time</Label><P>{ride.time}</P>
            </Field>

          </Section>
          <Section>
            <Field>            
            <Label>User</Label> <P>'Example' Rating: '1-5'</P>
            </Field>
            <Field>            
              <Label>Number of Passengers </Label><P>{ride.passengers}</P>
            </Field>
            <Field>            
              <Label>Price</Label> <P>${ride.price}</P>
            </Field>      
          
            <Link to={`/ride/${ride.id}`}><Button>View Details</Button></Link>

          </Section>
          </RideInfo>
      ))}
      </div>
    );
  }
}
export default Post;
